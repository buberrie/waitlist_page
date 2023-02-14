import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { FormArea, TextArea, Wrapper } from './form.styled'

const Form = ({onPopIn}) => {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        country: "",
        message: ""
      });
    
    const handleChange = (e) => {
       setValues({ ...values, [e.target.name]: e.target.value });
    };
    
  return (
    <Wrapper>
        <h1>Book a Consultation with us</h1>
        <FormArea onSubmit={onPopIn}>
            <Input id="full name" name="fullName" type="text" placeholder="Enter your full name" htmlFor="full name" handleChange={handleChange} />
            <Input id="email" name="email" type="text" placeholder="Enter your work email" htmlFor="email" handleChange={handleChange} />
            <Input id="phone number" name="phoneNumber" type="number" placeholder="Mobile number" htmlFor="phone number" handleChange={handleChange} />
            <Input id="company name" name="companyName" type="text" placeholder="Company Name" htmlFor="company name" handleChange={handleChange} />
            <TextArea>
                <label htmlFor="country"></label>
                <select name="country" id="country" onChange={handleChange} >
                    <option value="Select Country">Select Country</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="South Africa">South Africa</option>
                </select>
            </TextArea>
            <TextArea>
                <textarea name="message" id="message" rows="5" placeholder='Drop a message.....' onChange={handleChange} ></textarea>
            </TextArea>
            <Button type='submit' text="Send Request" onClick={console.log(values)}/>
        </FormArea>
    </Wrapper>
  )
}

export default Form