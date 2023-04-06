import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginLogo } from '../../../assets';
import { Input, LoginButton } from '../../../components';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import { User } from '../../../types/User';
import './style.css'

export const SignupForm = () => {

    const navigate = useNavigate();

    const { user, setUser }:any = useContext(AuthContext);

    const { register, getValues } = useForm();

    const _handleSignUp = (values: any) => {
        let newUser: User = {
            name: values[0],
            lastname: values[1],
            email: values[2],
            cnpj: values[3],
            phone: values[4],
            password: values[5],
            password_secure: values[6],
        }
        setUser(newUser);
        localStorage.setItem('newUser', newUser.email);
        localStorage.setItem('IsLoged', 'true');
        console.log('create user:', localStorage.getItem('newUser'));
        navigate('/');
    }

    return (
        <div className="form-container">
            <img src={LoginLogo} className="logo" />

            <p>inscreva-se na sua conta</p>

            <form className="formulary" onSubmit={(e) => {
                e.preventDefault();
                let values = getValues(['name', 'lastname', 'email', 'cnpj', 'phone', 'password', 'password_confirm']);
                _handleSignUp(values);
                console.log('')
            }}>
                <div className="left-form">

                    <p>Nome:</p>
                    <input className="sign-input" placeholder="Enter yout name.." {...register('name')}/>
                    <p>Email:</p>
                    <input className="sign-input" placeholder="info@xyz.com" {...register('email')}/>
                    <p>Password:</p>
                    <input className="sign-input" type="password" placeholder="xxxxxxxxx" {...register('password')}/>
                    <p>Cnpj:</p>
                    <input className="sign-input" placeholder="Enter company number..." {...register('cnpj')}/>
                    <br></br>
                    <button type="submit" className='SubmitButton'>
                        <p>Inscrever-se</p>
                    </button>
                </div>

                <div className="right-form">
                    <p>Sobrenome:</p>
                    <input className="sign-input" placeholder="Enter your last name.." {...register('lastname')}/>
                    <p>Mobile No. :</p>
                    <input className="sign-input" placeholder="+55 - 21 99955-55442" {...register('phone')}/>
                    <p>Confirm Password :</p>
                    <input className="sign-input" type="password" placeholder="xxxxxxxxx" {...register('password_confirm')}/>
                </div>
            </form>

        </div>

    );

}
