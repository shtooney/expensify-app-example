import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent', 
        amount: 109500, 
        createdAt: 1000,
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should addExpense action object with default values', () => {

    const expenseEmptyData = {
        description: '', 
        amount: 0, 
        createdAt: 0,
        note: ''
    }
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseEmptyData,
            id: expect.any(String)
        }
    });


});