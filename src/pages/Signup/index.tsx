
import { gestacao } from '../../assets';
import { SignupForm } from './Signup-form';
import './style.css'

export const Signup = () => {
    return (
        <div className="sign-container">
            <div className="left-s-container">
                <SignupForm />
            </div>
            <div className="right-s-container">
                <img src={gestacao} className="left-image"/>
            </div>
        </div>
    );
};

