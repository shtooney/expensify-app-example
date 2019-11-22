import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values,',() => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby amount,',() => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby date,',() => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter,',() => {
    const currentState = {
        text: 'eee',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = {
        type: 'SET_TEXT_FILTER', 
        text: 'qqq'
    };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('qqq');
});

// test('should set startDate filter,',() => {
//     const currentState = {
//         text: 'eee',
//         startDate: undefined,
//         endDate: undefined,
//         sortBy: 'amount'
//     };

//     const action = {
//         type: 'SET_START_DATE',
//         startDate: moment()
//     };
//     const state = filtersReducer(undefined, action);
//     expect(state.startDate).toEqual(moment());
// });

// test('should set endDate filter,',() => {
//     const currentState = {
//         text: 'eee',
//         startDate: moment(),
//         endDate: moment(),
//         sortBy: 'amount'
//     };
// ////
//     const action = {
//         type: 'SET_END_DATE',
//         endDate: moment()
//     };
//     const state = filtersReducer(undefined, action);
//     expect(state.endDate).toEqual(moment());
// });