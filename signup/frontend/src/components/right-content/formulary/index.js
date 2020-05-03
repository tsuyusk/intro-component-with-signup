import React, { useState } from "react";
import { useFormik,  } from "formik";
import { Container, SubmitButton, LittleText } from "./styled";
import TermsModal from "./terms";

export default function Formulary() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {values, handleChange, handleSubmit, handleReset} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: values => {
      alert('We sent you an e-mail for validating your account.')
    }
  })
  return (
    <Container>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
        value={values.firstName}
        onChange={handleChange}
        type="text"
        className="form-control"
        name="firstName"
        placeholder="First name"
        />
        <br />
        <input
        value={values.lastName}
        onChange={handleChange}
        type="text"
        className="form-control"
        name="lastName"
        placeholder="Last name"
        />
        <br />
        <input
        value={values.email}
        onChange={handleChange}
        type="email"
        className="form-control"
        name="email"
        placeholder="Email address"
        />
        <br />
        <input
        value={values.password}
        onChange={handleChange}
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
        />
        <br />      
        <input
        value={values.confirmPassword}
        onChange={handleChange}
        type="password"
        className="form-control"
        name="confirmPassword"
        placeholder="Confirm password"
        />
        <br />
        <SubmitButton type="submit">Claim your free trial</SubmitButton>
        <LittleText>By checking the button, you are agreeing to our 
          <span onClick={toggle}>Terms and Services</span>
        </LittleText>
      </form>
      <TermsModal isOpen={isOpen} closeModal={toggle}/>
    </Container>
  )
}