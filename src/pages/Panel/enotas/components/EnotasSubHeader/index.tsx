import { useContext } from "react";
import { Arrow, Registro, Settings } from "../../../../../assets";
import NavigationContext from "../../../../../context/NavigationContext";
import { Home } from "../../../home";
import './style.css';

export const EnotasSubHeader = () => {
    const { currentPanel, setCurrentPanel, checkPanel, setCheckPanel }: any = useContext(NavigationContext);

    const _handleBack = () => {
        setCurrentPanel(<Home />);
    };

    return (
        <div className="enotas-header">
            <span>
                <img src={Arrow} onClick={() => {
                    _handleBack();
                    setCheckPanel('Home')
                    }} />
                <button className="relatorio-btn">Relatorio</button>
                <button className="configuracoes-btn">
                    <img src={Settings} />
                    configuracoes
                </button>
            </span>

            <span>
                <button className="registro-btn"><img src={Registro} id="RegistroIcon" />
                    Registro
                </button>

            </span>
        </div>
    );
};
