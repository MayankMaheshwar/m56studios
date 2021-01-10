const validateform = require('./validateform')
test('properly validating form values', ()=> {
    expect(validateform().toBe(true))
})
