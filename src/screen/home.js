import logo from '../image/logo.png';
import hero from '../image/hero.png';

function Home(){
    return (
        <div className='home'>
            <header>
                <div className='header-container'>
                    <div className='left-side-header'>
                        <img src={logo} alt=''/>
                        <div className='menu-header'>
                            <a href='www.google.com' >Produk</a>
                            <a href='www.google.com' >Harga</a>
                            <a href='www.google.com' >Tentang Kami</a>
                        </div>
                    </div>
                    <div className='right-side-header'>
                        <div className='masuk'>
                            <p>Masuk</p>
                        </div>
                        <div className='daftar'>
                            <p>Daftar</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className='jumbotron'>
                <div className='text-jumbotron'>
                    <h1>Bagikan acaramu dengan mudah dan menarik.</h1>
                    <p className='description'>Bagikan informasi melalui digital page untuk semua acaramu dengan mudah dan menarik hanya dalam beberapa menit.</p>
                    <div className='button-jumbotron'>
                        <div className='coba-sekarang'>
                            <p>Coba Sekarang</p>
                        </div>
                        <div className='pelajari'>
                            <p>Pelajari</p>
                        </div>
                    </div>
                </div>
                <div className='hero'>
                    <img src={hero} alt='' />
                </div>
            </div>
        </div>
    )
} 

export default Home;