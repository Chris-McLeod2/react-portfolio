import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function Contact() {
    
	const [emailOBJ, setemailOBJ] = useState({
		name: '', email: '', message: ''
	}); 

	
    function handleChange(e) {
		let email = {...emailOBJ};
		email[e.target.name]=e.target.value;
		setemailOBJ(email);
     }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    //     document.querySelectorAll('.form-control').forEach((input) => input.value = "")
    // }

    return (
        <div className='container'>
            <h2>Contact me</h2>
            <form >
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input className='form-control' required type="text" name="name"  onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input className='form-control' required type="email" name="email"  onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Message:</label>
                    <textarea className='form-control' required name="message" rows="4" onChange={handleChange} />
                </div>
              
                <button className='btn btn-primary' href="mailto:mcleod32@live.com" type="submit">Submit</button>
            </form>
           
        </div>
    )
}

export default Contact;