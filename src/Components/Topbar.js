import React from 'react';
import './Topbar.css'
import {useHistory} from 'react-router-dom'

const Topbar = (props) => {
    const history = useHistory()
    const Logout = () => {
        history.push("/")
    }

    return ( 
        <header className="top-bar">
            <div className="left-part">
                <div className="logo">
                    <p>Pharmacy store</p>
                </div>
            </div>
            <button className="button" onClick={Logout} > Logout </button>
        </header>
    );
}
 
export default Topbar;