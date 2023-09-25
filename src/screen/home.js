import logo from '../image/logo.png';
import hero from '../image/hero.png';
import music from '../image/music.png';
import sport from '../image/sport.png';
import family from '../image/family.png';
import formal from '../image/formal.png';
import mockup from '../image/Mockup.png';
import dibagikan from '../image/mudah-dibagikan.png';
import dibuat from '../image/Mudah-dibuat.png';
import gratis from '../image/gratis.png';




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
                    <p className='description'>Bagikan informasi secara digital untuk semua acaramu.</p>
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
            <div className='feature-benefit'>
                <div className="feature">
                    <h2>Apapun acaramu kami telah siapkan.</h2>
                    <div className='list-feature'>
                            <div className='list'>
                                <div className='icon-feature'>
                                    <img src={music} alt='music icon' />
                                </div>
                                <div className='text-feature'>
                                    <h3>Music</h3>
                                    <p>Acara pensi, konser musik, live music, atau dangdutan makin menarik dengan undangan digital.</p>
                                </div>
                            </div>
                            <div className='list'>
                                <div className='icon-feature'>
                                    <img src={sport} alt='music icon' />
                                </div>
                                <div className='text-feature'>
                                    <h3>Sport</h3>
                                    <p>Acara olahraga kampus, sekolah, atau lingkungan rumah lebih menarik menggunakan undangan digital.</p>
                                </div>
                            </div>
                            <div className='list'>
                                <div className='icon-feature'>
                                    <img src={family} alt='music icon' />
                                </div>
                                <div className='text-feature'>
                                    <h3>Keluarga</h3>
                                    <p>Kumpulkan semua anggota keluarga dengan undangan yang menarik dan mudah.</p>
                                </div>
                            </div>
                            <div className='list'>
                                <div className='icon-feature'>
                                    <img src={formal} alt='music icon' />
                                </div>
                                <div className='text-feature'>
                                    <h3>formal</h3>
                                    <p>Buat undangan acara kantor, institusi, atau acara resmi lainnya dengan mudah dan cepat .</p>
                                </div>
                            </div>
                    </div>
                    <div className='mockup-design'>
                        <img src={mockup} alt='' />
                    </div>
                </div>
                <div className='benefit'>
                    <div className='benefit-container'>
                        <div className='benefit-box benefit-one'>
                            <div className='icon-picture'>
                                <img src={dibuat} alt='dibuat' />
                            </div>
                            <div className='text-benefit'>
                                <h3>Mudah dibuat</h3>
                                <p>Pilih tempate yang disukai lalu langsung edit text sesuai dengan yang kamu butuhkan.</p>
                            </div>
                        </div>
                        <div className='benefit-box benefit-two'>
                            <div className='icon-picture'>
                                <img src={dibagikan} alt='dibagikan' />
                            </div>
                            <div className='text-benefit'>
                                <h3>Mudah dibagikan</h3>
                                <p>Pilih tempate yang disukai lalu langsung edit text sesuai dengan yang kamu butuhkan.</p>
                            </div>
                        </div>
                        <div className='benefit-box benefit-three'>
                            <div className='icon-picture'>
                                <img src={gratis} alt='dibagikan' />
                            </div>
                            <div className='text-benefit'>
                                <h3>Gratis</h3>
                                <p>Pilih tempate yang disukai lalu langsung edit text sesuai dengan yang kamu butuhkan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home;