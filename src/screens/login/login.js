import './login.css';
import google from '../../image/google-logo.png';
import heroLogin from '../../image/hero-login.png';
import logo from '../../image/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [data, setData] = useState();
    // useEffect(() => {
    //     async function fetchApi(){
    //         let response = await fetch('https://localhost:3001/personal')
    //         response = await response.json()
    //         setData(response)
    //     }
    //     fetchApi()
    // })
    // console.log(data)
    const handleSubmit = (e) => {
        if (password.length >= 7 && email.includes('@')){
            if (email === 'ugi@gmail.com' && password === 'eelu123'){
                return navigate('/personal')
            } else {
                alert('Your email or password wrong!')
            }
        } else if (!email.includes("@") && password.length < 7){
            e.preventDefault();
            document.getElementById('password-alert').innerHTML = 'Password harus lebih dari 7 karakter';
            document.getElementById('email-alert').innerHTML = 'Formal email tidak sesuai';
        } else if (password.length < 7){
            e.preventDefault();
            document.getElementById('password-alert').innerHTML = 'Password harus lebih dari 7 karakter';
        } else {
            e.preventDefault();
            document.getElementById('email-alert').innerHTML = 'Formal email tidak sesuai';

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
                            <div className='login-alert'>
                                <p id='email-alert'></p>
                            </div>
                        </div>
                        <div className="Email">
                            <p>Password</p>
                            <div className="input-container">
                                <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className='login-alert'>
                                <p id='password-alert'></p>
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