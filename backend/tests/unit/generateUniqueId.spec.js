const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        //expect = espera-se que algo aconteça
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    });
});