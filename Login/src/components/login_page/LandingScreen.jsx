import { MainDiv, WelcomePara, WelcomeGreet, CreateBtn, LoginBtn } from "./LandingStyled"
import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'

const Landing = () => {
    const navigate=useNavigate()
    return (
            <MainDiv>
                <WelcomePara>Welcome to PopX</WelcomePara>
                <WelcomeGreet>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</WelcomeGreet>
                <CreateBtn onClick={()=>navigate("/login")}>
                    Create Account
                </CreateBtn>
                <LoginBtn onClick={()=>navigate("/register")}>
                    Already Registered? Login
                </LoginBtn>
            </MainDiv>

    )
}

export default Landing