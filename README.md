This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Coffee Store App
## The App uses React and Redux
This application is an implementation of the Ice Cream Store App Demo by Thomas Tuts as part of the [Redux in Motion Course on Manning Publications](https://www.manning.com/livevideo/redux-in-motion)

### Coure Objectives
* The fundamentals of working with Redux
* Writing maintainable code
* Using Redux in the real-world
* Handling asynchronous data
* A test-first approach to web development
* Combining React and Redux

## Course Summary
### Running Tests Using Jest
* running a test using the it function
```javascript
it('test name here', function() {
    expect(true).toEqual(true);
});
```
* running multiple tests
```javascript
describe('test group name', function() {
    it('first test', function() {
        expect(true).toEqual(true);
    });
    it('second test', function() {
        expect(true).toEqual(true);
    });    
});
```
### Actions
* basic action with an optional payload
```javascript
const doSomething = (payloadValue = 'defaultPayloadValue') => ({
    type: 'DO_SOMETHING',
    payload: payloadValue
});
```
### Reducers
* reducer is a pure function that doesn't mutate the initial state
```javascript
const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'DO_SOMETHING',
            return {
                ...state,
                count: state.count + action.payload
            };
    }
}
});
```
### Testing Reducers
```javascript
import { action, reducer } from './dir/to/them';

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
});
