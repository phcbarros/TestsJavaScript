(function(){
    'use strict';
    
    describe('função que soma dois números', function() {
        var somar = somarDoisNumeros;
        it('deve somar dois números', function() {
            expect(somar).toBeDefined();
            expect(somar(1,1)).toBe(2);
        });
    });
    
    describe('função que subtrair dois números', function() {
        var sub = subtrairDoisNumeros;
        it('deve subtrair dois números', function() {
            expect(sub).toBeDefined();
            expect(sub(1,1)).toBe(0);
        });
    });
    
    describe('função que multiplicar dois números', function() {
        var mult = multiplicarDoisNumeros;
        it('deve multiplicar dois números', function() {
            expect(mult).toBeDefined();
            expect(mult(5,5)).toBe(25);
        });
    });
    
    describe('função que dividir dois números', function() {
        var div = dividirDoisNumeros;
        it('deve dividir dois números', function() {
            expect(div).toBeDefined();
            expect(div(3,3)).toBe(1);
        });
    });
    
})();