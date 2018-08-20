const lib = require('../lib');
describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
    
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
    
        expect(result).toBe(1);
    });
    
    it('should return zero if input is zero', () => {
        const result = lib.absolute(0);
    
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const name = 'jay';
        const result = lib.greet(name);
        expect(result).toContain(name);//not using toBe() so that it's not too specific
        expect(result).toMatch(/jay/);
    });
});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        //too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull(); //useless

        //too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');//we're fixated on their order
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);

        //proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD'])); //order doesn't matter
    });
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        //expect(result).toBe({ id: 1, price: 10 });//fails because the actual and expected objects are in two different locations in memory
        expect(result).toEqual({ id: 1, price: 10 });//expected and actual objects should have exactly the same properties
        expect(result).toMatchObject({ id: 1, price: 10 });//passes as long as actual has atleast the same properties as the actual (it could have more)
        expect(result).toHaveProperty('id', 1);
    });
});