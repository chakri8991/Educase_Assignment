import { MainDiv, HeadingStyle } from "../loginScreen/loginStyles";
import {
  RadioInput,
  MainGg,
  CreateBtn,
  AgencyLabel,
  RadioGroup,
  RadioLabel,
  CompanyInput,
  CompanyLabel,
  PassInput,
  PassLabel,
  EmailLabel,
  EmailInputs,
  PhoneLabel,
  PhoneInput,
  EaddressLabel,
  AddressInput,
} from "./registerStyle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? value : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {
      fullName: formData.fullName.trim() === "",
      phone: formData.phone.trim() === "",
      email: formData.email.trim() === "",
      password: formData.password.trim() === "",
      isAgency: formData.isAgency === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (!hasErrors) {
      navigate("/");
    }
  };

  return (
    <MainGg>
      <HeadingStyle>Create your PopX account</HeadingStyle>

      <EmailLabel>Full Name*</EmailLabel>
      <EmailInputs
        name="fullName"
        placeholder="Enter Full Name"
        value={formData.fullName}
        onChange={handleChange}
        style={{ borderColor: errors.fullName ? "red" : "#CBCBCB" }}
      />

      <PhoneLabel>Phone number*</PhoneLabel>
      <PhoneInput
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={handleChange}
        style={{ borderColor: errors.phone ? "red" : "#CBCBCB" }}
      />

      <EaddressLabel>Email address*</EaddressLabel>
      <AddressInput
        name="email"
        placeholder="Enter Email Address"
        value={formData.email}
        onChange={handleChange}
        style={{ borderColor: errors.email ? "red" : "#CBCBCB" }}
      />

      <PassLabel>Password *</PassLabel>
      <PassInput
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        style={{ borderColor: errors.password ? "red" : "#CBCBCB" }}
      />

      <CompanyLabel>Company name</CompanyLabel>
      <CompanyInput
        name="companyName"
        placeholder="Enter Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />

      <AgencyLabel>Are you an Agency?*</AgencyLabel>
      <RadioGroup>
        <div>
          <RadioInput
            type="radio"
            id="yes"
            name="isAgency"
            value="yes"
            checked={formData.isAgency === "yes"}
            onChange={handleChange}
          />
          <RadioLabel htmlFor="yes">Yes</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            id="no"
            name="isAgency"
            value="no"
            checked={formData.isAgency === "no"}
            onChange={handleChange}
          />
          <RadioLabel htmlFor="no">No</RadioLabel>
        </div>
      </RadioGroup>
      {errors.isAgency && <p style={{ color: "red", marginTop: "5px" }}>Please select an option</p>}

      <CreateBtn onClick={handleSubmit}>Create Account</CreateBtn>
    </MainGg>
  );
};

export default Register;
