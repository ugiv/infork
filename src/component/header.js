import './header.css';
import logo from '../image/logo.png';
import { 
    AiOutlineMenu,
    AiOutlineUser
} from "react-icons/ai";
    
export function Header({handleSidebar}){
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='menu-button' onClick={handleSidebar}>
                    <AiOutlineMenu/>
                </div>
                <img src={logo} alt='logo' />
                <div className='user-icons'>
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    )
}