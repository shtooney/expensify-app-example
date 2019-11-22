import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

//const total = getExpensesTotal(expenses);
//console.log(expenses);

test('should return 0 if no expenses at all', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {    
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195); //195 total
});

test('should sum all expenses', () => {

    const ourSum = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    //114195 total
    const res = selectExpensesTotal(expenses);
    expect(res).toEqual(ourSum); 
});