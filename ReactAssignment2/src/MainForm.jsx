import React from 'react';
import { Link } from 'react-router-dom';

export default function MainForm() {
    return (
        <div>
            <h1>User Management</h1>
            <nav className="nav-links">
                <Link to="/add-user" className="nav-btn">Add User</Link>                
                <Link to="/list-users" className="nav-btn">List Users</Link>               
            </nav>
        </div>
    );
}