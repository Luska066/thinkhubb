import './style.css';
import { Box } from "../../../components";
import { useContext } from 'react';
import NavigationContext from '../../../context/NavigationContext';
import { Enotas } from '../enotas';

export const Home = () => {
    const { currentPanel, setCurrentPanel, checkPanel, setCheckPanel}: any = useContext(NavigationContext);

    return (
        <Box>
            <div className="box-container">

                <p className='p1'>Olá, Seja Bem vindo(a)<br/>ao nosso Páinel THINKHUB!</p>
                <p className='p2'>Sua central de aplicativos, ferramentas de hub</p>
                <p className='final'>Emita NF-e automaticamente</p>

                <div className="actions">
                    <button className='RetangularButton bg-green' onClick={() => {
                        setCurrentPanel(<Enotas/>);
                        setCheckPanel('ENOTAS');
                        }}>
                        <p>E-NOTAS</p>
                    </button>

                    <button className='RetangularButton bg-blue'>
                        <p>Sankhya</p>
                    </button>
                </div>

            </div>
        </Box>
    )
};
