const doSomething = (payloadValue = 'defaultPayloadValue') => ({
    type: 'DO_SOMETHING',
    payload: payloadValue
});

console.log(doSomething(1));