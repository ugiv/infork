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
            document.getElementById('mainBoard').style.width = '100%';
        } else{
            setSidebar(true)
            document.getElementById('mainBoard').style.width = '80%';
        }
    }
    const [beranda, setBeranda] = useState(true);
    const [statistik, setStatistik] = useState(false);
    const [pengaturan, setPengaturan] = useState(false);
    const handelMainBoard = (name) => {
        const beranda = document.getElementById("beranda");
        const statistik = document.getElementById("statistik");
        const pengaturan = document.getElementById("pengaturan");
        if (name === 'beranda') {
            setBeranda(true);
            setStatistik(false);
            setPengaturan(false);
            beranda.classList.add("menu-active");
            pengaturan.classList.remove("menu-active");
            statistik.classList.remove("menu-active");
        } else if (name === 'statistik'){
            setBeranda(false);
            setStatistik(true);
            setPengaturan(false);
            statistik.classList.add("menu-active")
            beranda.classList.remove("menu-active")
            pengaturan.classList.remove("menu-active")
        } else if (name === 'pengaturan'){
            setBeranda(false);
            setStatistik(false);
            setPengaturan(true);
            pengaturan.classList.add("menu-active")
            beranda.classList.remove("menu-active")
            statistik.classList.remove("menu-active")
        }
    }
    return (
        <div className='personal-page'>
            <div className='personal-page-container'>
                <Header handleSidebar={handleSidebar} />
                <div className='main'>
                    {
                        sidebar? 
                        <Sidebar 
                            handleMainBoard={handelMainBoard}
                        />: 
                        <div style={{display: 'none'}}></div>
                    }
                    <div id='mainBoard' className='main-board'>
                        <Board 
                            beranda={beranda} 
                            statistik={statistik} 
                            pengaturan={pengaturan} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;