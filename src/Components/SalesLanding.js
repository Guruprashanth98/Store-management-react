import React from 'react';
import './SalesLanding.css'
import Create from './Create'
import {useState} from 'react'
import Order from './Order'
import { act } from 'react-dom/test-utils';

const SalesLanding = () => {
    const [activeContainer, setActiveContainer] = useState('Display')

    const handleBtnClick = () =>{
        setActiveContainer("create-order")
    }

    const handleAdd  = () =>{
        setActiveContainer("Display")
    }

    return ( 
        <div className = "sales-landing">
            <h1>Sales Executive Panel</h1>
            <div className = "container">
                {activeContainer === "Display" && <SalesContainer />}
                {activeContainer === "create-order" && <Create item  = {"order"} fn={handleAdd}/>}
                <button className="add-btn order"  onClick  = {handleBtnClick}>{`Create Order`}</button>
            </div>
        </div>
    );
}
 
export default SalesLanding;

const SalesContainer = () => {
    var orders = localStorage.getItem("orders")
    orders = JSON.parse(orders)
    console.log(orders)
    const [medicines, setMedicines] = useState(orders)

    return ( 
        <div className  = "inventory">
            <table className = "list-table">
                <tr>
                    <th>Customer Name</th>
                    <th>Customer Contact Number</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                {orders?.map(item => <Order item={item} />)}
            </table>
        </div>
    );
}
 