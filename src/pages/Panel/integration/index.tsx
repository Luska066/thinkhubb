import { TableLine } from '../../../assets';
import { Array } from '../../../services/example';
import { Data } from '../../../types/Data';
import { SubHeader } from './components/SubHeader';
import { TableHead } from './components/TableHead';
import { TableItem } from './components/TableItem';
import './style.css';

export const Integration = () => {

    return (
        <div className="Integration-Panel">

            <SubHeader />

            <div className='content'>
                <div className="integration-box">
                    <table>

                        <TableHead />
                        <img src={TableLine} className='icon' />

                        {Array.map((item, index) => (
                            <TableItem
                                id={item.id}
                                descricao={item.descricao}
                                permissao={item.permissao}
                                plataforma={item.plataforma}
                                status={item.status}
                            />
                        ))}
                    </table>
                </div>

            </div>
        </div>
    );
}
