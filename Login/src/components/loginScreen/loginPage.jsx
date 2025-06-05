import { MainDiv, HeadingStyle, ParaStyle, EmailLabel, EmailInput, ButtonEle, PassInput, Passlabel } from "./loginStyles"

import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Loginpage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

 


    const handleLogin = () => {
        const emailTrimmed = email.trim();
        const passwordTrimmed = password.trim();

        const emailIsEmpty = emailTrimmed === "";
        const passwordIsEmpty = passwordTrimmed === "";

        setEmailError(emailIsEmpty);
        setPasswordError(passwordIsEmpty);

        if (!emailIsEmpty && !passwordIsEmpty) {
            navigate("/Profile");
        }
    };

    const navigate = useNavigate()
    return (
        <MainDiv>
            <HeadingStyle>Signin to your PopX account</HeadingStyle>
            <ParaStyle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</ParaStyle>
            <EmailLabel>Email Address</EmailLabel>
            <EmailInput type="text" placeholder="Enter email address" value={email} onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false)
            }}
                hasError={emailError} />
            <Passlabel>Password</Passlabel>
            <PassInput type="password" placeholder="Enter password" value={password} onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false)
            }}  hasError={passwordError}/>
            <ButtonEle onClick={handleLogin}>Login</ButtonEle>
        </MainDiv>
    )
}

export default Loginpage