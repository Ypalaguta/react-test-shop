export const testAction = (action, actualPayload, expectedPayload) => {
    describe(`${action.name}`, () => {
        Object.keys(expectedPayload).forEach(key => {
            test(`should return a payload with the correct ${key}`, () => {
                expect(actualPayload[key]).toEqual(expectedPayload[key]);
            });
        });

        test('should not have any untested payload properties', () => {
            expect(Object.keys(actualPayload)).toHaveLength(Object.keys(expectedPayload).length);
        });

        test('should return a payload with a defined type', () => {
            expect(actualPayload.type).not.toBeUndefined();
        });
    });
};