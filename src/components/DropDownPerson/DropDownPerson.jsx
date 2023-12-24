import React,{useState} from "react";
import LogInForm from "../LogInForm/LogInForm";
import SignInForm from "../SignInForm/SignInForm";
import "./DropDownPerson.css";

function DropDownPerson() {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    function loginclick () {
        setLoginModalOpen(!loginModalOpen);
    }

    const [signupModalOpen, setSignupModalOpen] = useState(false);

    function signupclick () {
        setSignupModalOpen(!signupModalOpen);
    }

    return(
        <div>
        <div className="dropdown">
            <ul>
                <li className="login" onClick={loginclick}>Login</li>
                <li className="signup" onClick={signupclick}>SignUp</li>
            </ul>
        </div>
        <LogInForm visible={loginModalOpen} close={loginclick}/>
        <SignInForm visible={signupModalOpen} close={signupclick}/>
        
        </div>
    );
}

export default DropDownPerson;