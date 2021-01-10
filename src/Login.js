import React from "react";

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    
    return (

        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin} >Log in to dawnTter</button>
                            <p>
                                Don't have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)} >Sign up right now</span>
                                <br></br>
                            </p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleSignup} >Sign up to dawnTter</button>
                                <p>
                                    Already have an account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in here</span>
                                    <br></br>
                                </p>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
        )
}

export default Login;