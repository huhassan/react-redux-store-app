import { action, reducer } from '';

describe('Counter', function () {
    it('should have an initial state', function () {
        const result = reducer();
        expect(result.count).toEqual(0);
    })
})

describe('Counter', function () {
    it('should increase by one', function () {
        const result = reducer();
        const action = actionCreator()
        expect(result.count).toEqual(1);
    })
})