import { AddIcon, Atualizar, Lixeira, TableDivisor, TableLine, Arrow } from '../../../../../assets';

export const TableHead = () => {
    return (
        <thead>
            <tr className='Header-tb'>
                <th className='td'>
                    <span className='nomeIcon nomeIcon-left'> Plataforma</span>

                    <img src={TableDivisor} />

                </th>
                <th className='td'>
                    <span className='nomeIcon nomeIcon-left'> Descrição</span>

                    <img src={TableDivisor} />

                </th>
                <th className='td'>
                    <span className='nomeIcon nomeIcon-left'>Status</span>


                    <img src={TableDivisor} />

                </th>
                <th className='td'>
                    <span className="nomeIcon nomeIcon-left">Permissão</span>


                </th>
            </tr>
        </thead>
    );
}
