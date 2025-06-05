
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing from "./components/login_page/LandingScreen"

import Loginpage from "./components/loginScreen/loginPage"

import Register from "./components/registerpage/register"

import AccountCom from "./components/AccountSettingPage/Account"

import { Bgmain } from "./AppStyle"


const App = () => {
  return (
    <Bgmain>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Loginpage/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/Profile" element={<AccountCom/>}/>

          
        </Routes>
      </BrowserRouter>
   </Bgmain>

  )

}
export default App
