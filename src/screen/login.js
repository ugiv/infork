import './login.css';
import google from '../image/google-logo.png';
import heroLogin from '../image/hero-login.png';
import logo from '../image/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email);
    console.log(password);
    const handleSubmit = (e) => {
        if (email === 'ugi@gmail.com' && password === 'eelu123'){
            e.preventDefault();
            return navigate('/personal')
        } else {
            alert('Your email or password false')
        }
    }
    const navigate = useNavigate();
    return (
        <div className='login'>
        <div className='login-container'>
            <div className='jumbotron-side'>
                <div className='jumbotron-container-login'>
                    <img src={heroLogin} alt='connection' />
                </div>
            </div>
            <div className='form-side'>
                <div className='title-form'>
                    <h2>Login</h2>
                    <p>Selamat datang kembali</p>
                </div>
                <div className="google-button">
                    <img src={google} alt='google logo' />
                    <p>Masuk dengan Google</p>
                </div>
                <div className='line'></div>
                <div className="input-form">
                    <form onSubmit={handleSubmit}>
                        <div className="Email">
                            <p>Email</p>
                            <div className="input-container">
                                <input type='text' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="Email">
                            <p>Password</p>
                            <div className="input-container">
                                <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className='forget-password'>
                            <a href="https:www.google.com">Lupa password?</a>
                        </div>
                        <div className="login-botton">
                            <div 
                                className="input-container login-button-container" >
                                <input type='submit' value='Login'/>
                                {/* <p>Login</p> */}
                            </div>
                        </div>
                        <div className='signup'>
                            <p>Belum punya akun?</p>
                            <a href='https:www.google.com'>Daftar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            <div className='footer'>
                <div className='footer-container'>
                    <p>© 2023 PT. Energi Kreatif Bangsa</p>
                    <img src={logo} alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default Login;