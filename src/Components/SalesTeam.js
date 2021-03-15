import React, { useState } from 'react';
import './SalesTeam.css'
import ListItem from './ListItem'

const SalesTeam = ({edit}) => {
    var _salesTeam = localStorage.getItem("sales-executives")
    _salesTeam = JSON.parse(_salesTeam)
    console.log(_salesTeam)
    const [salesTeam, setSalesTeam] = useState(_salesTeam)

    const handleDelete = (data) =>{
        setSalesTeam(salesTeam.filter(item => item.First_Name !== data.First_Name))
        var a = JSON.parse(localStorage.getItem("sales-executives"))
        a = a.filter(item => item.First_Name !== data.First_Name)
        localStorage.setItem("sales-executives", JSON.stringify(a))
    }

    const handleEdit = () =>{

    }

    return (  
        <div className  = "sales-team">
            <table className = "list-table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Experience Years</th>
                </tr>
                {salesTeam?.map(item => <SalesItem item={item} onDelete = {handleDelete} edit={edit}/>)}
            </table>
        </div>
    );
}
 
export default SalesTeam;

const SalesItem = ({item,onDelete,edit}) => {
    const {First_Name,Last_Name,Date_of_Birth,gender,Experience_Years} = item
    return ( 
        <tr className="table-row">
            <td>{First_Name}</td>
            <td className="cell-primary">{Last_Name}</td>
            <td className="cell-secondary">{Date_of_Birth}</td>
            <td className="cell-primary">{gender}</td>
            <td className="cell-secondary">{Experience_Years}</td>
            <button className="edit-btn" onClick={() => {edit("sales-executive",First_Name)}}>{`Edit `}</button>
            <button className="delete-btn" onClick={() => onDelete(item)}>{`Delete`}</button>
        </tr>
    );
}
 
