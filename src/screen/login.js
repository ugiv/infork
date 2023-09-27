import './login.css';
import google from '../image/google-logo.png';
import heroLogin from '../image/hero-login.png';
import logo from '../image/logo.png';
function Login(){
    return (
        <div className='login'>
        <div className='login-container'>
            <div className='jumbotron-side'>
                <div className='jumbotron-container-login'>
                    <img src={heroLogin} alt='connection' />
                </div>
            </div>
            <div className='form-side'>
                <h2>Login</h2>
                <p>Selamat datang kembali</p>
                <div className="google-button">
                    <img src={google} alt='google logo' />
                    <p>Masuk dengan Google</p>
                </div>
                <div className='line'></div>
                <div className="input-form">
                    <form>
                        <div className="Email">
                            <p>Email</p>
                            <div className="input-container">
                                <input type='text' />
                            </div>
                        </div>
                        <div className="Email">
                            <p>Password</p>
                            <div className="input-container">
                                <input type='password' />
                            </div>
                        </div>
                        <div className='forget-password'>
                            <a href="https:www.google.com">Lupa password?</a>
                        </div>
                        <div className="login-botton">
                            <div className="input-container login-button-container">
                                <input type='submit' value='Login'/>
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