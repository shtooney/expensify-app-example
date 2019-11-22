import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({description, amount, createdAt, id}) => (    
    <div>
        <Link to={`/edit/${id}`} exact={true}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount).format('$0,0.00')}
             - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>        
    </div>
);

export default ExpenseListItem;