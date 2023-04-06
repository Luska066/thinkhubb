import { useContext } from 'react';
import { LogoutBtn, Menu1, Menu2, Menu3, MenuX } from '../../assets';
import NavigationContext from '../../context/NavigationContext';
import { Home } from '../../pages/Panel/home';
import { Integration } from '../../pages/Panel/integration';
import { Enotas } from '../../pages/Panel/enotas';
import './style.css';
import { DinamicButton } from './DinamicButton';
import AuthContext from '../../context/AuthContext';

export const Menu = () => {
    const { currentPanel, setCurrentPanel, checkPanel, setCheckPanel }:any = useContext(NavigationContext);
    const { setIsUserIn }: any = useContext(AuthContext);

    const _handleLogOut = () => {
        window.location.href = "/";
    }

    return (
        <div className="Menu">
            <button className="Menu-item1" onClick={() => {
                setCurrentPanel(<Home/>)
                setCheckPanel('Home');
            }}>
                <span><img src={Menu1} /></span>
                Painel
            </button>

            <button className="Menu-item2">
                <span><img src={Menu2} /></span>
                Dados do Perfil
            </button>

            <DinamicButton/>

            <button className='Menu-item4' onClick={() => {
                setIsUserIn(false);
                _handleLogOut();
                }}>
                <span>
                    <img src={LogoutBtn}/>
                </span>
                Sair
            </button>
        </div>
    );
};
