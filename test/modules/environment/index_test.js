describe ('Environment', function() {
    describe('typeof', function() {

        it('should return true if ProductionString is string', function() {
            assert.equal(typeof(ProductionString), 'string');
        });

        it('should return true if DevelopmentString is string', function() {
            assert.equal(typeof(DevelopmentString), 'string');
        });

        it('should return true if getEnvironment is function', function() {
            assert.equal(typeof(getEnvironment), 'function');
        });

        it('should return true if isDebug is function', function() {
            assert.equal(typeof(isDebug), 'function');
        });

        it('should return true if isProduction is function', function() {
            assert.equal(typeof(isProduction), 'function');
        });
    });

    describe('output', function() {

        it('getEnvironment should output string', function() {
            expect(getEnvironment()).to.be.a('string');
        })

        it('isDebug should return true when nu.env is "dev"', function() {
            assert.equal(true, isDebug());
        });

        it('isProduction should return false when nu.env is "dev"', function() {
            assert.equal(false, isProduction());
        });
    });
});