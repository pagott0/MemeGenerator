//for learning forms

import React from "react";

export default function Forms() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: "",
    })


    function handleChange(event) {
        const {name, value, checked, type} = event.target
        setFormData(function(prevFormData){
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault() //used to prevent the normal behavior of the event. is this case, refreshing the page when submitted
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                
            />
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox"
                onChange={handleChange}
                name="isFriendly"
                id="isFriendly"
                checked= {formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employee status</legend>

                <input
                type="radio"
                name="employment"
                onChange={handleChange}
                id="unemployed"
                value="unemployed"  
                checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>

                <input
                type="radio"
                name="employment"
                onChange={handleChange}
                id="part-time" 
                value="part-time" 
                checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-Time</label>
                
                <input
                type="radio"
                name="employment"
                onChange={handleChange}
                id="full-time"  
                value="full-time"
                checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-Time</label>
            </fieldset>


            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >   
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>



            </select>

            <button>Submit</button>  {/* a button inside a form in react will ever works as submit */}

        </form>
    )
}