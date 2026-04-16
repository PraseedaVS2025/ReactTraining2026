import React from 'react';
import UserInfo from './UserInfo.jsx';

const UserList = (props) => {   
    const users = props.users;
    const setUsers = props.setUsers;
    return (
        <div>
            <h1>User List</h1>            
            <UserInfo users={users} setUsers={setUsers} />
        </div>
    );
};
export default UserList;