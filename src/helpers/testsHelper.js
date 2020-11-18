import {Route} from 'react-router-dom';
import {
    call,
    put,
    takeEvery,
} from 'redux-saga/effects';

export const testActionDispatch = (actionType, actualState, expectedState) => {
    describe(`when ${actionType} is dispatched`, () => {
        test('should return the expected state', () => {
            expect(actualState).toEqual(expectedState);
        });
    });
};

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

export const testRoute = (wrapper, expectedPath) => {
    describe(`${expectedPath} route`, () => {
        let matchingRoutes;

        beforeEach(() => {
            matchingRoutes = wrapper.find(Route).filterWhere(route => route.props().path === expectedPath);
        });

        test(`should render a Route where props.path === ${expectedPath}`, () => {
            expect(matchingRoutes).toHaveLength(1);
        });
    });
};

export const testWatchSaga = (actionType, watchSaga, workSaga) => {
    describe(`${watchSaga.name}`, () => {
        const watcher = watchSaga();

        test(`should listen to ${actionType} and yield ${workSaga.name}`, () => {
            const actualYield = watcher.next().value;
            const expectedYield = takeEvery(actionType, workSaga);

            expect(actualYield).toEqual(expectedYield);
        });
    });
};

export const testWorkSaga = (
    workSaga,
    getCallArgs,
    handleSuccess,
    handleError,
    mockAction = {},
    mockSuccessResponse = {id: 555},
) => {
    describe(`${workSaga.name}`, () => {
        describe('when the client call is successful', () => {
            const worker = workSaga(mockAction);

            test('should yield call with the spread results of getCallArgs', () => {
                const actualYield = worker.next().value;
                const expectedYield = call(...getCallArgs(mockAction));

                expect(actualYield).toEqual(expectedYield);
            });

            test('should yield put with the results of handleSuccess', () => {
                const actualYield = worker.next(mockSuccessResponse).value;
                const expectedYield = put(handleSuccess(mockSuccessResponse, mockAction));

                expect(actualYield).toEqual(expectedYield);
            });

            test('should return undefined and be done', () => {
                const actual = worker.next();

                expect(actual.value).toBeUndefined();
                expect(actual.done).toBe(true);
            });
        });

        describe('when the client call fails', () => {
            const mockErrorResponse = {
                error: new Error('mockError'),
            };

            const worker = workSaga(mockAction);

            test('should yield call with the spread results of getCallArgs', () => {
                const actualYield = worker.next().value;
                const expectedYield = call(...getCallArgs(mockAction));

                expect(actualYield).toEqual(expectedYield);
            });

            test('should yield put with the results of handleError', () => {
                const actualYield = worker.next(mockErrorResponse).value;
                const test = handleError(mockErrorResponse, mockAction);

                const expectedYield = put(test);

                expect(actualYield).toEqual(expectedYield);
            });

            test('should return undefined and be done', () => {
                const actual = worker.next();

                expect(actual.value).toBeUndefined();
                expect(actual.done).toBe(true);
            });
        });
    });
};

export function testSelector(selector, expected, previousSelectorReturn) {
    test(`${selector} selector test`, () => {
        const actual = selector.resultFunc(previousSelectorReturn);
        expect(actual).toEqual(expected)
    })
}
