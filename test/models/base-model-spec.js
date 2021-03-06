import { TestModel } from '../../.tmp/test-mocks/test-model';

describe ('BaseModel getErrors()', function () {

    var testModel;

    beforeEach(function () {
        testModel = new TestModel();
    });


    it ('should return a map with property names as keys and an array of error messages as values', function () {
        testModel.testProperty = null;

        var errorMap = testModel.getErrors();
        expect(errorMap.testProperty[0]).to.equal('Test property can not be empty');
    });

    it ('should return null if there were no errors', function () {
        testModel.testProperty = 'foo';
        testModel.secondTestProperty = 'bar';
        var errorMap = testModel.getErrors();
        expect(errorMap).to.be.null
    });

    it ('should only getErrors one property if a property name is passed', function () {
        testModel.testProperty = '';
        var errorMap = testModel.getErrors('testProperty');
        expect(errorMap).to.not.be.null;
        expect(errorMap.secondTestProperty).to.be.undefined;
    });

    it ('should getErrors all properties if no property name is passed', function () {
        var errorMap = testModel.getErrors();
        expect(errorMap).to.not.be.null;
        expect(errorMap.testProperty[0]).to.equal('Test property can not be empty');
        expect(errorMap.secondTestProperty[0]).to.equal('Second Test Property cannot be empty');
    });


});

