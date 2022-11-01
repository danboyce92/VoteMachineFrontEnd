import React from 'react';
import Admin from './Admin';
import AdminButtonOff from './AdminButtonOff';

const AdminButtonOn = (props) => {

    //Conditional to toggle whether admin ui is displayed or not
    const adminLogged = props.isAdmin;

    if(adminLogged) {
        return <Admin />
    } {
        return <AdminButtonOff />
    }




}

export default AdminButtonOn;