import { useNavigate } from "react-router-dom";

const UserInfo = (props) => {    
   const users = props.users;
   const setUsers = props.setUsers;
   const navigate = useNavigate();    

    const handleUserDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        // Update the state with the new list of users     
        setUsers(updatedUsers);    
        navigate("/"); // redirect
    };


  return (
    <div >
      {users.map((user) => (
        <div key={user.id} className="card">
          <h2 className="card-title">{user.name ? user.name : 'Unknown User'}</h2>
          <div className="card-body">
            {user.age && <p>Age: {user.age}</p>}
            {user.state && <p>State: {user.state}</p>}
            <button className="delete-btn" onClick={() => handleUserDelete(user.id)}>
              Delete
            </button>
          </div>          
        </div>
      ))}
    </div>
  );
};
export default UserInfo;         
    