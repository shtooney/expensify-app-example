import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import data from '../../firebase/firebase';
import database from 'firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup removeExpense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    });
});

test('should editExpense action object', () => {
    const action = editExpense('a',{note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'a',
        updates: {
            note: 'new note value'
        }
    })
});

test('should addExpense action object', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// test('should addExpense to DB store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Laptop',
//         amount: 20000,
//         note: 'good stuff',
//         createdAt: 1000
//     }
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value')
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData);
//         done();
//     });    
// });

// test('should addExpense with defaults to DB store', (done) => {
//     const store = createMockStore({});
//     const expenseDefaults = {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0
//     }
//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefaults
//             }
//         });
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value')
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefaults);
//         done();
//     });    
// });


// test('should addExpense action object with default values', () => {

//     const expenseEmptyData = {
//         description: '', 
//         amount: 0, 
//         createdAt: 0,
//         note: ''
//     }
//     const action = addExpense({});
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseEmptyData,
//             id: expect.any(String)
//         }
//     });


// });