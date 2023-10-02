import { useEffect, useState } from 'react';
import './statistic.css';

export function Statistik(){
    const [active, setActive] = useState('collection-1');
    const [prev, setPrev] = useState('collection-1')
    const [visitor, setVisitor] = useState(123);
    const [link, setLink] = useState('https://www.infork.id/4234325jjfjk');

    const handleClick = (newActive, visitor, link) => {
        setPrev(active);
        setActive(newActive);
        setVisitor(visitor);
        setLink(link);
    }
    useEffect(() => {
        const prevActive = document.getElementById(prev);
        const newActive = document.getElementById(active);

        prevActive.classList.remove('collection-active');
        newActive.classList.add('collection-active');
    }, [active, prev])
    return (
        <div className="statistic">
            <p>Statistik</p>
            <div className="statistic-collection-container">
                <div className="statistic-collection">
                    <div 
                        id='collection-1' 
                        className="statistic-collection-items"
                        onClick={() => handleClick('collection-1', 123, 'https://www.infork.id/4234325jjfjk')}
                    ></div>
                    <div 
                        id='collection-2' 
                        className="statistic-collection-items"
                        onClick={() => handleClick('collection-2', 663, 'https://www.infork.id/18945fef52k')}
                    ></div>
                    <div 
                        id='collection-3' 
                        className="statistic-collection-items"
                        onClick={() => handleClick('collection-3', 3403, 'https://www.infork.id/8885465jjfe54k')}
                    ></div>
                    <div 
                        id='collection-4' 
                        className="statistic-collection-items"
                        onClick={() => handleClick('collection-4', 450, 'https://www.infork.id/77564784feafe54fjk')}
                    ></div>
                </div>
            </div>
            <div className='visitor-statistic'>
                <div className='visitor-statistic-left'>
                    <p className='label-text-statistic'>Kunjungan</p>
                    <p className='visitor-statistic-box'>{visitor}</p>
                </div>
            </div>
            <div className='collection-link'>
                <div>
                    <p className='label-text-statistic'>Link</p>
                    <p className='link-collection-statistic'>{link}</p>
                </div>
                <button>Edit</button>
            </div>
        </div>
    )
}