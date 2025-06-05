import {MainDiv,HeadingStyle,ParaStyle,EmailLabel,EmailInput,ButtonEle,PassInput,Passlabel} from "./loginStyles"
const Loginpage=()=>{
    return(
        <MainDiv>
            <HeadingStyle>Signin to your PopX account</HeadingStyle>
            <ParaStyle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</ParaStyle>
            <EmailLabel>Email Address</EmailLabel>
            <EmailInput type="text" placeholder="Enter email address"/>
            <Passlabel>Password</Passlabel>
            <PassInput type="password" placeholder="Enter password"/>
            <ButtonEle>Login</ButtonEle>
        </MainDiv>
    )
}

export default Loginpage