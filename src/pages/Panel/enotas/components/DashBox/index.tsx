import './style.css'

export const DashBox = (props: any) => {
    return (
        <div {...props} id='div-dashbox'>
            {props.children}
        </div>

    );
}

export const MiniDashBox = (props: any) => {
    return (

        <div id='div-dashbox' className='mini-dash-box'>
            <span className='title-number-dash-box'>{props.title}</span>
            <span className='number-dash-box'>
                {props.value}
            </span>
        </div>)
}
