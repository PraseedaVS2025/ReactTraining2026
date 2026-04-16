import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Form1 = ({users,setUsers}) => {
    
    const [formData, setFormData] = useState({id:crypto.randomUUID(), name: '', age: '', state: ''});
    const [errors, setErrors] = useState({});
    
    const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    return newErrors;
  };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        //setFormData({...formData, [name]: value});

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }

        setUsers([...users, formData]);   
        
        // Clear the form after submission
        setFormData({name: '', age: '', state: ''});
        setErrors({});
        
        navigate("/list-users"); // redirect
    }

  return (

    <div>
        <h1>Add User</h1>
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" min={18} value={formData.age} onChange={handleInputChange} required />
                 {errors.age && <p className="error">{errors.age}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="state">State:</label>
                <select id="state" name="state" value={formData.state} onChange={handleInputChange} required>
                    <option value="">--Select State--</option>
                    <option value="KL">Kerala</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="KA">Karnataka</option>
                </select>
            </div> 

            <button type="submit" className="submit-btn" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>
    );
}
export default Form1;
