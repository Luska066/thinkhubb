import {HeaderLogo, MessageIcon, UserEdit, UserImage} from '../../assets';
import './style.css';


export const HeaderRight = () => {
    return (
        <div className='HeaderRight'>
            <span></span>
            <div className="header-menu">
                <strong className="username">Sankhya</strong>

                <span className="userImage">
                    <img src={UserImage} alt="Sanhkya user" />
                </span>

                <span className="userEdit">
                    <img src={UserEdit}  />
                </span>

                <span className="Notification">
                    <img src={MessageIcon} />
                </span>

            </div>
        </div>
      );
}


