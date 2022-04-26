import { isThisThingOn } from './index'

describe('incident.io coding challenge', () => {
    describe('isThisThingOn', () => {
        test('when everything is set up correctly, the tests should pass', () => {
            expect(isThisThingOn()).toEqual(new Date(2021, 10, 15, 16, 0, 0, 0))
        })
    })
})
