import {FaEye, FaEyeSlash, FaGooglePlusG} from "react-icons/fa";
import "./LoginPage.scss";
import {Link} from "react-router-dom";
import {TiSocialFacebook} from "react-icons/ti";
import logo from "../../assets/images/Golden-building.png";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useForm} from "react-hook-form";
import spinner from "../../assets/gifs/Spinner.gif";
import {useState} from "react";

export function LoginPage() {
    const [openEye, setOpenEye] = useState(false);
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        criteriaMode: "all"
    });

    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const onSubmit = async (data) => {
        const remember = data.rememberMe;
        setIsLoading(true);
        setTimeout(async () => {
            try {
                setIsLoading(false);
            } catch (error) {

                setIsLoading(false);
            }
        }, 2000)
    }

    return (
        <div id="login">
            <header>

            </header>
            <div className="container">
                <div className="content-wrapper">
                    <div className="login-box">
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                            <div className="flex-head-form">
                                <h1>Sign In</h1>
                                <div className="form-group">
                                    <button className="icon-btn" type='button'><FaGooglePlusG/></button>
                                    <button className="icon-btn" type='button'><TiSocialFacebook/></button>
                                </div>
                            </div>
                            <div className="form-title">
                                <p>or use your email password</p>
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type="email"
                                       {...register("email",{
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Email"/>
                                {errors.email &&
                                    <p style={{color: "red", fontSize: "13px"}}>{errors.email.message}</p>}
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type={openEye ? "text" : "password"}
                                       {...register("password", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Password"/>
                                {openEye ? <FaEye onClick={() => setOpenEye(!openEye)}></FaEye> :
                                    <FaEyeSlash onClick={() => setOpenEye(!openEye)}></FaEyeSlash>}
                                {errors.password &&
                                    <p style={{color: "red", fontSize: "13px"}}>{errors.password.message}</p>}
                            </div>
                            <div className="form-group remember-forgot">
                                <input type="checkbox" {...register("rememberMe")} id="remember-me" name="remember"/>
                                <label htmlFor="remember-me">Remember-me</label>
                                <Link to="/">Forget your Password?</Link>
                            </div>
                            <div className="form-group">
                                <button className="submit-btn" type={"submit"} disabled={isLoading}
                                        style={isLoading ? {background: "#ccc"} : null}>
                                    {isLoading ?
                                        <img src={spinner} alt="spinner"/>
                                        :
                                        "Log in"
                                    }
                                </button>
                            </div>
                            <Link to={`/`} className={'come-back'}><FaArrowLeftLong/> Back to Home Page</Link>
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