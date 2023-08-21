import React from "react"

export default function Signup() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleSubmit(event) {
        event.preventDefault()
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

/* THE CSS FOR IT TO BE BEAUTIFUL:
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #639;
    height: 100vh;
    font-family: 'Inter', sans-serif;
}

.form-container {
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
}

.form--input {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 5px;
    font-family: 'Inter', sans-serif;
}

.form--submit {
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: #639;
    border: none;   
    cursor: pointer; 
}

.form--marketing {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
}

.form--marketing > input {
    margin-right: 10px;
}
*/