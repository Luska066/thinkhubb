import { Button } from '../../types/Button';
import './style.css';

export const SignupButton = (props: Button) => {
    return (
        <button className="SignupButton" {...props}>
            <p>{props.children}</p>
        </button>
    );
};


