import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//This function (which is used for Redux dispatch)
//is one that returns a function and is only allowed to do that as redux-thunk is used
//which will help us work with data in a DB
//This means = store data in a DB and then dispatch AddExpense up above

//expenseData is what will be called via startAddExpense FROM AddExpensePage component
// Summary - PAST: addExpense() was called when it was Redux-only
// Summary - NOW: addExpense() will be called within startAddExpense(), whith
// (cont.) startAddExpense being called from AppExpensePage component
// this means data will hit the DB and then will dispatch the Redux action
// Meaning: it will save the expense in the DB and then will dispatch expense to Redux
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        //reminder: this is just object destructuring and setting defaults
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt}

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
}

export const removeExpense = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

//export const startSetExpenses;
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })                    
            });
            return expenses
        }).then((expenses) => {
            dispatch(setExpenses(expenses));
        });
    }
}