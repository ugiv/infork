import './personal.css';
import { Sidebar } from '../component/sidebar';
import { Header } from '../component/header';
import { useState } from 'react';
import { Board } from '../component/board';

function Personal(){
    const [sidebar, setSidebar] = useState(true);
    const handleSidebar = () => {
        if (sidebar){
            setSidebar(false)
        } else{
            setSidebar(true)
        }
    }
    const [beranda, setBeranda] = useState(true);
    const [statistik, setStatistik] = useState(false);
    const [pengaturan, setPengaturan] = useState(false);
    const handelMainBoard = (name) => {
        if (name === 'beranda') {
            setBeranda(true);
            setStatistik(false);
            setPengaturan(false);
        } else if (name === 'statistik'){
            setBeranda(false);
            setStatistik(true);
            setPengaturan(false);
        } else if (name === 'pengaturan'){
            setBeranda(false);
            setStatistik(false);
            setPengaturan(true);
        }
    }
    return (
        <div className='personal-page'>
            <div className='personal-page-container'>
                <Header handleSidebar={handleSidebar} />
                <div className='main'>
                    {
                        sidebar? <Sidebar />: <div style={{display: 'none'}}></div>
                    }
                    <div className='main-board'>
                        <Board beranda={beranda} statistik={statistik} pengaturan={pengaturan} handelMainBoard={handelMainBoard} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;