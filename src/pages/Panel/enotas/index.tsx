import { Arrow, DetalhesEnotas, GraficoEnotas, HorizontalLine, IconHeaderEnotas, Pencil, SmallGraficoEnotas, TableDivisor, TableLine } from '../../../assets';
import { DashBox, MiniDashBox } from './components/DashBox';
import { ButtonDashBox } from './components/EnotasButton';
import { TableDivisorEnotas } from '../../../assets'
import './style.css'
import { useContext } from 'react';
import NavigationContext from '../../../context/NavigationContext';
import { Home } from '../home';
import { EnotasSubHeader } from './components/EnotasSubHeader';
import { InfoBox } from './components/InfoBox';

export const Enotas = () => {

    const { currentPanel, setCurrentPanel }: any = useContext(NavigationContext);

    const _handleBack = () => {
        setCurrentPanel(<Home />)
    }

    return (
        <div className="enotas-container">
            <EnotasSubHeader />
            <div className="enotas-box">

                <div className="left-dash">
                    <DashBox className='dash-box left-top-dashbox'>
                        <div className='container-left'>
                            <header className='header'>
                                <img src={IconHeaderEnotas}></img>
                                <span>MOVIMENTAÇÃO DE <br />NOTAS (ANO 2022)</span>
                            </header>

                            <article className='subheader'>
                                <span>NOVEMBRO 2022</span>
                                <img src={SmallGraficoEnotas} alt="" />


                            </article>

                            <div className='grafico'>
                                <img src={GraficoEnotas} width="200px" alt="" />

                                <span>MOVIMENTAÇÃO DE GUIA</span>
                            </div>

                            <div className='base-color'>
                                <ul>
                                    <li>
                                        <span className='color BLUE'></span>
                                        <small>CANCELADAS</small>
                                    </li>


                                    <li>
                                        <span className='color YELLOW'></span>
                                        <small>VENCIDAS</small>
                                    </li>
                                    <li>
                                        <span className='color LIGHT-GREEN'></span>
                                        <small>PAGAS</small>
                                        </li>
                                </ul>
                                <ul className='end-color'>
                                    <li><span className='color  RED'></span>
                                        <small>EMITIDAS</small></li>
                                    <li><span className='color BLACK'></span>
                                        <small>À VENCER</small></li>
                                </ul>

                            </div>
                        </div>
                    </DashBox>
                </div>
                <div className="right-dash">

                    <DashBox class='dash-box right-top-dashbox'>
                        <InfoBox id={1} transacao="4958615626" valor="59.580,00" />
                        <img src={TableLine} className="TableLine" />

                        <div className='subtitle'>
                            <ul className='subtitle-container'>
                                <li className='itens-subtitle'>
                                    DETALHES DA TRANSAÇÃO
                                </li>
                                <li className='itens-subtitle second-class'>
                                    DETALHES DA NOTA FISCAL
                                </li>

                            </ul>
                            <img src={TableLine} className="TableLine  second-TableLine" />
                        </div>

                        <div className='detalhes-components'>
                            <div className=' detalhes-components-inter'>
                                <div className='components-left'>
                                    <div className='align'>
                                        <img src={DetalhesEnotas} />
                                    </div>
                                </div>

                                <img src={HorizontalLine} className='' alt="" />

                                <div className='container-text'>
                                    <ul className='container-text-box'>
                                        <li className='container-itens'>DATA DA COMPETÊNCIA<br />30/11/202</li>
                                        <li className='container-itens'>NÚMERO<br /> 485459962541</li>
                                    </ul>
                                    <div className='button-container'>
                                        <ButtonDashBox className='reds'>BAIXAR PDF</ButtonDashBox>
                                        <ButtonDashBox className='blue'>BAIXAR XML</ButtonDashBox>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </DashBox>

                    <div className="down-dash">
                        <MiniDashBox title="EMITIR" value="300" />
                        <MiniDashBox title="À VENCER" value="300" />
                        <MiniDashBox title="PAGAS" value="300" />
                        <MiniDashBox title="VENCIDAS" value="300" />
                        <MiniDashBox title="CANCELADAS" value="300" />
                    </div>
                </div>
            </div>

        </div>
    );
}
