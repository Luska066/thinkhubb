import { Button } from '../../types/Button';
import './style.css'

export const LoginButton = (props: Button) => {
    return (
        <button className="LoginButton" onClick={props.onClick} type="submit" >
            <p>{props.children}</p>
        </button>
    );
};

