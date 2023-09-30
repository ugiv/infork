import { BsFillHouseDoorFill, BsFileBarGraph} from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import './sidebar.css';
export function Sidebar({handleMainBoard}){
    const handleClick = (name) => {
        handleMainBoard(name);
        // const beranda = document.getElementById("beranda");
        // const statistik = document.getElementById("statistik");
        // const pengaturan = document.getElementById("pengaturan");
        // if (name === "beranda"){
        //     beranda.classList.add("menu-active");
        //     pengaturan.classList.remove("menu-active");
        //     statistik.classList.remove("menu-active");
        // } else if (name === "statistik") {
        //     statistik.classList.add("menu-active")
        //     beranda.classList.remove("menu-active")
        //     pengaturan.classList.remove("menu-active")
        // } else if (name === "pengaturan") {
        //     pengaturan.classList.add("menu-active")
        //     beranda.classList.remove("menu-active")
        //     statistik.classList.remove("menu-active")
        // }
    }
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className='sidebar-menu'>
                    <div id="beranda" className="menu-items menu-active" onClick={() => handleClick("beranda")}>
                        <BsFillHouseDoorFill />
                        <p>Beranda</p>
                    </div>
                    <div id="statistik" className="menu-items" onClick={() => handleClick("statistik")}>
                        <BsFileBarGraph />
                        <p>Statistik</p>
                    </div>
                    <div id="pengaturan" className="menu-items" onClick={() => handleClick("pengaturan")}>
                        <AiTwotoneSetting />
                        <p>Pengaturan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}