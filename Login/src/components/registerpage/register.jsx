import { MainDiv, HeadingStyle } from "../loginScreen/loginStyles";
import {RadioInput,MainGg,CreateBtn,AgencyLabel, RadioGroup, RadioLabel, CompanyInput, CompanyLabel, PassInput, PassLabel, EmailLabel, EmailInputs, PhoneLabel, PhoneInput, EaddressLabel, AddressInput } from "./registerStyle"

const Register = () => {
    return (
        <MainGg>
            <HeadingStyle>Create your PopX account</HeadingStyle>
            <EmailLabel>Full Name*</EmailLabel>
            <EmailInputs type="text" placeholder="Enter Full Name" required/>
            <PhoneLabel>Phone number*</PhoneLabel>
            <PhoneInput placeholder="Enter Phone Number" />
            <EaddressLabel>Email address*</EaddressLabel>
            <AddressInput placeholder="Enter Email Address" />
            <PassLabel>Password *</PassLabel>
            <PassInput placeholder="Enter Password" />
            <CompanyLabel>Company name</CompanyLabel>
            <CompanyInput placeholder="Enter Full Name" />
            <AgencyLabel>Are you an Agency?*</AgencyLabel>
            
            <RadioGroup>
                <div>
                    <RadioInput type="radio" id="yes" name="agency" />
                    <RadioLabel htmlFor="yes">Yes</RadioLabel>
                </div>
                <div>
                    <RadioInput type="radio" id="no" name="agency" />
                    <RadioLabel htmlFor="no">No</RadioLabel>
                </div>
            </RadioGroup>

            <CreateBtn>Create Account</CreateBtn>

        </MainGg>
    )
}

export default Register;