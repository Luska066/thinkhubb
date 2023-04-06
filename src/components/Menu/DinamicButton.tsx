import { useContext } from "react"
import { Menu3, MenuX } from "../../assets";
import NavigationContext from "../../context/NavigationContext"
import { Enotas } from "../../pages/Panel/enotas";
import { Integration } from "../../pages/Panel/integration";

export const DinamicButton = () => {
    const { currentPanel, setCurrentPanel, checkPanel, setCheckPanel}:any = useContext(NavigationContext);

    if ( checkPanel != 'ENOTAS'){
        return (
            <button className="Menu-item3" onClick={() => setCurrentPanel(<Integration/>)}>
                <span><img src={Menu3} /></span>
                Integração
            </button>
        );
    } else {
        return (
            <button className="Menu-itemX" onClick={()=>{}}>
                <span><img src={MenuX} /></span>
                E-Notas
            </button>

        )
    }
}
