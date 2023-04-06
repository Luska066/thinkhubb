import './style.css'

export const ButtonDashBox = (props:any) => {

    return(
        <button className="ButtonDashBox" {...props}>
            {props.children}
        </button>
    );
}