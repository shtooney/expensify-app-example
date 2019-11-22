import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expense state',() => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should note remove expenses by if id is not found',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//add expense, edit expense, edit expense if id is null ---
test('should add an expense',() => {
    const expense = {
        id: '12',
        description: 'Utilities',
        note: '',
        amount: 8000,
        createdAt: 9000000000000000
    }
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
});

test('should edit an expense',() => {
    const expenseInScope = {
        ...expenses[2],
        note: 'zzz'
    }
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            note: 'zzz'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenseInScope]);
});

test('should not edit an expense',() => {
    const expenseInScope = {
        ...expenses[2],
        note: 'zzz'
    }
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-100',
        updates: {
            note: 'zzz'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});