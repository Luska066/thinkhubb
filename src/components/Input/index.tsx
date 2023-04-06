import './style.css';
import EmailIcon from '../../assets/EmailIcon.svg';
import PasswordIcon from '../../assets/PasswordIcon.svg';

export const Input = (props: any) => {
  return (
      <input {...props} />
  );
}

export const InputIcon = (props: any) => {
  return (
      <div className="input-container">
          <Input {...props}/>
          <section className="icon-box">
              <img src={props.icon}/>
          </section>
      </div>
  )
}



