describe ('Environment', function() {
    describe('typeof', function() {
        it('should return true if ProductionString is string', function() {
            assert.equal(typeof(ProductionString), 'string');
        });

        it('should return true if DevelopmentString is string', function() {
            assert.equal(typeof(DevelopmentString), 'string');
        });

        it('should return true if isDebug is function', function() {
            assert.equal(typeof(isDebug), 'function');
        });

        it('should return true if isProduction is function', function() {
            assert.equal(typeof(isProduction), 'function');
        });
    });
});