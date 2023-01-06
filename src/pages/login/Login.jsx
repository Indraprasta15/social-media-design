import "./login.css";

export default function Login() {
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
                    <input type="text" placeholder="email" className="logininput" />
                    <input type="password" placeholder="password" className="logininput" />
                    <button className="loginbutton">Sign In</button>
                    <span className="loginforgot">Forget Password?</span>
                    <button className="loginregisterbutton">
                        Create A New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
