import './/orange.css'
import hero from '../../image/orange-hero.png';
import logo from '../../image/logo-bnw.png';
import timeLine from '../../image/time-line.png';

function Orange(){
    return (
        <div className='orange'>
            <div className='orange-container'>
                <div className='orange-jumbotron'>
                    <div className='orange-logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='jumbotron-main-part'>
                        <div className='jumbotron-main-text'>
                            <h1>ORANGE</h1>
                            <p>School Competition</p>
                        </div>
                        <img src={hero} alt='orange-hero' />
                        <button>Daftar</button>
                    </div>
                </div>
                <div className='orange-main-part'>
                    <div className='description'>
                        <h3>Detail Acara</h3>
                        <p>Acara ini diselengarakan oleh kementerian pendidikan dan olahraga untuk meningkatkan antusiasme olahraga pada siswa sekolah menengah atas.</p>
                    </div>
                    <div className='orange-time-line'>
                        <div className='orange-time-line-text time-line-1'>
                            <h4>Pendaftaran Team</h4>
                            <p>1 - 10 Januari 2024</p>
                        </div>
                        <div className='orange-time-line-text time-line-2'>
                            <h4>Kualifikasi Kota</h4>
                            <p>17 - 25 Januari 2024</p>
                        </div>
                        <div className='orange-time-line-text time-line-3'>
                            <h4>Babak Group (36 besar)</h4>
                            <p>1 - 11 Februari 2024</p>
                        </div>
                        <div className='orange-time-line-text time-line-4'>
                            <h4>Quarter Final</h4>
                            <p>13 - 18 Februari 2024</p>
                        </div>
                        <div className='orange-time-line-text time-line-5'>
                            <h4>Semi Final</h4>
                            <p>20 - 24 Februari 2024</p>
                        </div>
                        <div className='orange-time-line-text time-line-6'>
                            <h4>Final</h4>
                            <p>30 Februari 2024</p>
                        </div>
                        <img src={timeLine} alt='time-line' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orange;