import { useState } from 'react';
import './pengaturan.css';
import { 
    AiOutlineUser
} from "react-icons/ai";

export function Pengaturan(){
    const [name, setName] = useState('Valentinus Abraham');
    const [email, setEmail] = useState('valentinus@gmail.com');
    console.log(name, email);
    return (
        <div className="setting">
            <div className="setting-container">
                <p className='setting-title'>Akun Anda</p>
                <div className='setting-items profile-picture-setting-container'>
                    <div className='setting-items-left'>
                        <p>Foto Profile</p>
                        <div className="profile-picture-setting">
                            <AiOutlineUser />
                        </div>
                    </div>
                    <button>Ubah Foto</button>
                </div>
                <div className='setting-items'>
                    <div className='setting-items-left'>
                        <p>Nama</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <button>Edit</button>
                </div>
                <div className='setting-items'>
                    <div className='setting-items-left'>
                        <p>Email</p>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    )
}