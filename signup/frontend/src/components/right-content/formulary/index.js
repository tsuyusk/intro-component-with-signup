import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, SubmitButton, LittleText, Error } from "./styled";
import TermsModal from "./terms";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(1, "Too short.")
  .required('Required.'),
  lastName: Yup.string()
  .min(1, "Too short.")
  .required('Required'),
  email: Yup.string()
  .email('Invalid e-mail.')
  .required('Required.'),
  password: Yup.string().required('Required.'),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], "Passwords must match.")
  .required('Required.')
})

export default function Formulary() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {values, handleChange, handleSubmit, handleReset, errors} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
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
        <Error>{errors.firstName && errors.firstName}</Error>
        <br />
        <input
        value={values.lastName}
        onChange={handleChange}
        type="text"
        className="form-control"
        name="lastName"
        placeholder="Last name"
        />
        <Error>{errors.lastName && errors.lastName}</Error>
        <br />
        <input
        value={values.email}
        onChange={handleChange}
        type="email"
        className="form-control"
        name="email"
        placeholder="Email address"
        />
        <Error>{errors.email && errors.email}</Error>
        <br />
        <input
        value={values.password}
        onChange={handleChange}
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
        />
        <Error>{errors.password && errors.password}</Error>
        <br />      
        <input
        value={values.confirmPassword}
        onChange={handleChange}
        type="password"
        className="form-control"
        name="confirmPassword"
        placeholder="Confirm password"
        />
        <Error>{errors.confirmPassword && errors.confirmPassword}</Error>
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