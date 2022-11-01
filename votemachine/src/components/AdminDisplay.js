import React from 'react';
import Admin from './Admin';
import AdminButtonOff from './AdminButtonOff';

const AdminButtonOn = (props) => {

    const adminLogged = props.isAdmin;

  if(adminLogged) {
    return <Admin />
  } {
    return <AdminButtonOff />
  }




}

export default AdminButtonOn;