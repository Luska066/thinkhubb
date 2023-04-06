
import './style.css';
import Arrow from '../../assets/Arrow.svg';
import { Box, Menu } from '../../components';
import { Integration } from '../Panel/integration';
import { Enotas } from '../Panel/enotas';
export const Dev  = () => {
    return (
        <div className="dev-container">
          {<Enotas/>}
        </div>

    );
}
