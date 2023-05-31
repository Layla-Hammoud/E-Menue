import GoogleIcon from "./google.svg"
import "./SignIn.css"
function SignIn() {
    return (
        <>
            <div className="main">
                <div className="image-container">
                </div>
                <div className="form-container">
                    <div className="new-user">
                        New To Food Grid? <span className="sign-up-link">Sign Up</span>
                    </div>
                    <form>
                        <h2>Welcome back to Food Grid</h2>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="form-input"
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            name="password"
                            placeholder="password"
                            required
                        /> 
                        </div>   
                        <button className="form-group submit-button" type="submit">Sign In</button> 
                        <p className="or-line">Or</p> 
                        <div className="google-button">
                            <img className="google-icon" src={GoogleIcon}></img>
                            <p>Continue with google</p></div>                
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignIn