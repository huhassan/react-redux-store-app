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