import React from 'react';

import './Order.css'

const Order = ({item}) => {

    const {contact_number,customer_name,products,quantity,total_amount} = item

    return (
        <tr className="table-row">
            <td>{customer_name}</td>
            <td className="cell-primary">{contact_number}</td>
            <td className="cell-secondary">{products}</td>
            <td className="cell-primary">{quantity}</td>
            <td className="cell-secondary">{total_amount}</td>
        </tr>
    );
}
 
export default Order;