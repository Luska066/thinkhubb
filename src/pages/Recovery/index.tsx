import './style.css';
import LoginLogo from '../../assets/LoginLogo.svg';
import { InputIcon, Typography } from '../../components';
import { EmailIcon } from '../../assets';
import { useState } from 'react';

export const Recovery = () => {
    const [ notify, setNotify ] = useState('*Insira seu email para redefinir a senha!');

    const _handleToRecovery = () =>{
        setNotify('*Email de recuperação enviado!!!')
    }

    document.querySelector('input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            _handleToRecovery();
        }
    })

    return (
        <div className="Recovery-Page">
            <div className="recovery-container">
                <img className="LoginLogo" src={LoginLogo} />

                <Typography className="Typography"></Typography>
                <p>Digite seu endereço de e-mail</p>
                <p>abaixo para redefinir sua senha</p>

                <div className="Action">
                    <Typography className="Email">Email:</Typography>
                    <InputIcon placeholder="info@thinklife.com.br" type="text" icon={EmailIcon} />

                </div>
                <br></br>
                <p className='red'>{notify}</p>
            </div>
        </div>
    );
}
