import { useState } from 'react';

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return {
                ...currData,
                [fieldName]: newValue
            };
        });
    };
let handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Form Submitted Successfully!");
        console.log("Submitted Data:", formData);
        
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input 
                placeholder="enter ur name" 
                type="text" 
                value={formData.fullName} // 3. Bind to the formData object
                id="fullname"
                name="fullName"
                onChange={handleInputChange} 
            /> 
            <br />
            <br />
            <label htmlFor="password">password</label>
            <input 
                placeholder="enter pass" 
                type="password" 
                value={formData.password} // Bind to the formData object
                id="password"
                name="password"
                onChange={handleInputChange} 
            />
            <label htmlFor="username">User Name</label>
            <input 
                placeholder="enter username" 
                type="text" 
                value={formData.userName} // Bind to the formData object
                id="username"
                name="userName"
                onChange={handleInputChange} 
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}