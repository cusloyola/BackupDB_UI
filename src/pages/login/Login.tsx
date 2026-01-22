
import { useState } from 'react';
import '../../styles/Login.css';
import logo from '../../assets/wallemrectangle.png';

function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="login-split-root">
            <div className="login-split-left">
                <div className="login-box">
                    <div className="login-header">
                        <img src={logo} alt="Wallem Logo" className="login-logo-large" />
                        <h1 className="login-title">Database Backup Monitoring</h1>
                        <p className="login-subtitle">Log in to your account</p>
                    </div>
                    <form className="login-form" noValidate>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className="text-[16px]"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="text-[16px]"
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                                >
                                    {isPasswordVisible ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-10.5-7.5a10.05 10.05 0 012.563-4.568m3.11-2.14A9.956 9.956 0 0112 5c5 0 9.27 3.11 10.5 7.5a9.956 9.956 0 01-4.198 5.568M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.857-.67 1.673-1.176 2.414M15.5 15.5a5.978 5.978 0 01-3.5 1c-3.314 0-6-2.686-6-6" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login-button">
                            Log In
                        </button>
                    </form>
                    <div className="login-footer">
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <span className="signup-link">
                            Don't have an account? <a href="#" className="signup">Register here</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="login-split-right">
                <div className="login-bg-image"></div>
            </div>
        </div>
    );
}

export default Login;
