import { TableDivisorEnotas } from "../../../../../assets";
import { Enotas } from "../../../../../types/Enotas";
import { ButtonDashBox } from "../EnotasButton";

export const InfoBox = (props: Enotas) => {
    return (
        <ul className='top-subdash-box'>

            <li className='itens-dashbox'>TRANSAÇÃO <br /> {props.transacao} <img src={TableDivisorEnotas} /></li>
            <li className='itens-dashbox' >R$ {props.valor} <img src={TableDivisorEnotas} /></li>
            <li className='itens-dashbox' >STATUS</li>

            <li className='itens-button-dashbox'>
                <li className='itens-dashbox' >
                    <ButtonDashBox>ENVIAR-NF-e</ButtonDashBox>
                </li>
                <li className='itens-dashbox' >
                    <ButtonDashBox>CANCELAR-NF-e</ButtonDashBox>
                </li>
            </li>
        </ul>
    );
};
