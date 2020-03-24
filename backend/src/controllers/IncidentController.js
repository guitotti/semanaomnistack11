const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //join, do sql, é relacionar dados de duas tabelas
            .limit(5) //retorna 5 incidentes
            .offset((page - 1) * 5) //pular 5 incidentes por página 
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization; 

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },
    
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization; //preciso verificar o id da ong para saber se o incidente que será deletado realmente foi criado pela ong que quer deletar


        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        //se o id da ong do incident (incident.ong_id) for diferent do id da ong logada, retorna o status 401 (código de não autorizado)
        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted.'}); // código 401 = não autorizado 
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};