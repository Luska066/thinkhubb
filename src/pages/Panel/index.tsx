import { ReactElement, useContext, useState } from 'react';
import { HeaderLeft, HeaderRight, Menu } from '../../components';
import AuthContext from '../../context/AuthContext';
import NavigationContext from '../../context/NavigationContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Home } from './home';
import './style.css'

export const Panel = () => {
    const { isUserIn, setIsUserIn, user, setUser }:any = useContext(AuthContext);

    const navigate = useNavigate();

    if (isUserIn === false) {
        navigate('/');
    } else {
        console.log('logado com: ', user);
    }

    const [currentPanel, setCurrentPanel] = useState<ReactElement>(<Home />);
    const [ checkPanel, setCheckPanel ] = useState<string>('Home');

    return (

        <NavigationContext.Provider value={{ currentPanel, setCurrentPanel, checkPanel, setCheckPanel }}>



            <body>
                <div id="left" className="column">
                    <div className="top-left">
                    <HeaderLeft />
                    </div>
                    <div className="bottom">
                        <Menu />
                    </div>
                </div>
                <div id="right" className="column">
                    <div className="top-right">
                        <HeaderRight />
                    </div>
                    <div className="bottom bottom-left">
                        {currentPanel}
                    </div>
                </div>
            </body>






        </NavigationContext.Provider>
    );
}
