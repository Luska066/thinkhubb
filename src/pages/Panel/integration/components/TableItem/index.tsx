import { Pencil, TableLine } from "../../../../../assets";
import { Data } from "../../../../../types/Data";

export const TableItem = (props: Data) => {
    return (

        <>
        <tr className='itens'  >
            <td className='onne-th'>{props.plataforma}</td>
            <td className='onne-th-2'>{props.descricao}</td>
            <td className='onne-th-3'>{props.status}</td>
            <td className='onne-th-4'>{props.permissao}</td>
            <td className='icons'>
                <span>
                    <img src={Pencil}/>
                </span>
            </td>
            <td className='icons'>
                <span onClick={()=>{console.log(`${props.id}`)}}>ENTRAR</span>
            </td>

        </tr>
        <img src={TableLine} className="TableLines"/>
        </>
    );
}
