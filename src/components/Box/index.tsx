import './style.css';

export const Box = (props: any) => {
    return (
        <div className="Box">
            {props.children}
        </div>
    );
}
