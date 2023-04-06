import { AddIcon, Atualizar, Lixeira, TableDivisor, TableLine, Arrow } from '../../../../../assets';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavigationContext from '../../../../../context/NavigationContext';
import { Home } from '../../../home';


export const SubHeader = () =>{
    const { currentPanel, setCurrentPanel }: any = useContext(NavigationContext);
    const navigate = useNavigate()

    const _handleBack = () => {
        setCurrentPanel(<Home/>)
    };

    return(
        <div className='sub-header'>
                <div className="sub-content">

                    <div className="back-button">
                        <img onClick={()=>{_handleBack()}} src={Arrow}/>
                        <span onClick={()=>{_handleBack()}}>Central da Integração</span>
                    </div>

                    <div className="HeaderBoxMenu">
                        <span className="Adicionar">
                            <img src={AddIcon} />
                            Adicionar
                        </span>
                        <span className="Atualizar">
                            <img src={Atualizar} />
                            Atualzar
                        </span>
                        <span className="LimparFiltros">
                            <img src={Lixeira} />
                            Limpar Filtros
                        </span>
                    </div>
                </div>

            </div>
    );
};
