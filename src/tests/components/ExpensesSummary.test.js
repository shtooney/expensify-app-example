import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render summary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render total for all expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235342343}/>);
    expect(wrapper).toMatchSnapshot();
});