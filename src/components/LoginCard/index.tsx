import {
    InputIcon,
    LoginButton,
    SignupButton,
    Typography
} from '../../components';
import { Link, Route, Router, Navigate, useNavigate } from 'react-router-dom';
import { EmailIcon, LoginLogo, PasswordIcon, SectionSvg } from '../../assets';
import { useContext, useState } from 'react';
import { Login } from '../../types/Login';
import { Section } from './Section';
import './style.css';
import { TestUsers } from '../../services/example';
import AuthContext from '../../context/AuthContext';

export const LoginCard = () => {
    const [InputEmail, setInputEmail] = useState<string>('');
    const [InputPassword, setInputPassword] = useState<string>('');
    const [login, setLogin] = useState<Login>({} as Login);
    const [loginStatus, setLoginStatus] = useState<string>('Faça seu login!');
    const {setUser, setIsUserIn}: any = useContext(AuthContext);

    const navigate = useNavigate()

    const _handleToLogin = () => {
        let userLogin = {
            email: InputEmail,
            password: InputPassword,
        }
        setLogin(userLogin);
        if (userLogin.email === localStorage.getItem('newUser')) {
            setLoginStatus('Autheticado com sucesso!');
            document.getElementById('loginStatus')?.setAttribute('style', 'color: green;');
            setUser(userLogin);
            setIsUserIn(true);
            navigate('/panel');
        } else {
            setLoginStatus('Usuário ou senha incorretos!');
            document.getElementById('loginStatus')?.setAttribute('style', 'color: red;');
        }

        //console.log(userLogin);
    }

    document.querySelector('input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            _handleToLogin();
        }
    })

    const _handleToSignUp = () => {
        navigate('/signup');

    }

    return (
        <>
            <div className="login-form">
                <img id="LoginLogo" src={LoginLogo} />
                <strong id='loginStatus'>{loginStatus}</strong>
            </div>
            <div className="form">
                <Typography>Email:</Typography>
                <InputIcon
                    placeholder="info@thinklife.com.br"
                    type="text"
                    icon={EmailIcon}
                    onChange={(e: any) => {
                        setInputEmail(e.target.value)
                        //console.log(InputEmail)
                    }
                    } />

                <Typography>Password: </Typography>

                <InputIcon
                    placeholder="Enter your password"
                    type="password" icon={PasswordIcon}
                    onChange={(e: any) => {
                        setInputPassword(e.target.value)
                        //console.log(InputPassword)
                    }
                    } />


            </div>
            <Link className='RecoveryLink' to="/recovery" relative="path">
                forgot password?
            </Link>

            <LoginButton
                onClick={() => {
                    _handleToLogin();
                }
                }>
                Login Now
            </LoginButton>

            <img src={SectionSvg}/>

            <SignupButton
                onClick={() => { _handleToSignUp() }}>
                inscreva-se agora
            </SignupButton>
        </>
    );
};
