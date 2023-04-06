import { capa, EmailIcon, Mancha } from '../../assets';
import { InputIcon, LoginCard } from '../../components';
import './style.css';


export const Login  = () => {

    return (
        <div className="login-container">
            <div className="left-container">
                <img className='mancha' src={Mancha} />
                <img src={capa}/>
            </div>
            <div className="right-container">
                <LoginCard/>
            </div>
        </div>
    );
}
