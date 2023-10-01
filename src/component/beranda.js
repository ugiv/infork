import './beranda.css';
import { DesignCollection } from './designCollection';
import { UserCollection } from './userCollection';
import { useEffect, useState } from 'react';

export function Beranda(){
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        const temukan = document.getElementById('temukan');
        const koleksi = document.getElementById('koleksi');
        if (toggle){
            temukan.classList.add('beranda-menu-active')
            koleksi.classList.remove('beranda-menu-active')
        } else {
            koleksi.classList.add('beranda-menu-active')
            temukan.classList.remove('beranda-menu-active')
        }
    }, [toggle])
    return (
        <div className="beranda">
            <div className="beranda-menu">
                <p 
                    id='temukan'
                    className='beranda-menu-active'
                    onClick={() => setToggle(true)}
                >Temukan</p>
                <p 
                    id='koleksi'
                    onClick={() => setToggle(false)}
                >Punya kamu</p>
            </div>
            {toggle?<DesignCollection />: <UserCollection />}
        </div>
    )
}