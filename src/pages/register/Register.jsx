import "./register.css";

export default function Register() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Inda-Social</h3>
                <span className="logindesc">
                    Connect with friends and the world around you on Inda-Social.
                </span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input type="text" placeholder="username" className="logininput" />
                    <input type="text" placeholder="email" className="logininput" />
                    <input type="text" placeholder="password" className="logininput" />
                    <input type="password" placeholder="password again" className="logininput" />
                    <button className="loginbutton">Sign Up</button>
                    <button className="loginregisterbutton">
                        Sign In Your Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
