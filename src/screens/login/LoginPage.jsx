import {FaGooglePlusG} from "react-icons/fa";
import "./LoginPage.scss";
import {Link} from "react-router-dom";
import {TiSocialFacebook} from "react-icons/ti";
import logo from "../../assets/images/Golden-building.png";

export function LoginPage() {

    return (
        <div id="login">
            <header>

            </header>
            <div className="container">
                <div className="content-wrapper">
                    <div className="login-box">
                        <form method='' action="/" className="login-form">
                            <h1>Sign In</h1>
                            <div className="form-group">
                                <button className="icon-btn"><FaGooglePlusG/></button>
                                <button className="icon-btn"><TiSocialFacebook /></button>
                            </div>
                            <div className="form-group">
                                <p>or use your email password</p>
                            </div>
                            <div className="form-group">
                                <input className='form-input' type="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input className='form-input' type="password" placeholder="Password"/>
                            </div>
                            <div className="form-group remember-forgot">
                                <input type="checkbox" id="remember-me" name="remember"/>
                                <label htmlFor="remember-me">Remember-me</label>
                                <Link to="/">Forget your Password?</Link>
                            </div>
                            <div className="form-group">
                                <button className="submit-btn" type="submit">SIGN IN</button>
                            </div>
                        </form>
                    </div>
                    <div className="overlay">
                        <div className="overlay-element">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="overlay-element">
                            <h2>SKY LIVE</h2>
                        </div>
                    </div>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}