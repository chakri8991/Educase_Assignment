import {MainGg} from "../registerpage/registerStyle.jsx"

import {ProfileNameEle,ProfileMail,ParaEle,ProfileName,ProfileMainBg,HeadingEle,ProfileEle,IconImg} from "./AccountStyle.jsx"

const AccountCom=()=>{
    return(
        <MainGg>
            <HeadingEle>Account Setting</HeadingEle>
            <ProfileMainBg>
                <div>
                    <ProfileEle src='./src/assets/profilepic.png' alt="Profile Pic"/>
                    <IconImg src="./src/assets/camicon.png" alt="Icon"/>
                </div>
                <ProfileName>
                    <ProfileNameEle>Marry Doe</ProfileNameEle>
                    <ProfileMail>Marry@Gmail.Com</ProfileMail>
                </ProfileName>
            </ProfileMainBg>
            <ParaEle>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</ParaEle>
        </MainGg>
    )
}


export default AccountCom