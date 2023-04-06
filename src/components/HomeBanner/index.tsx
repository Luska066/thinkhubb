import { Banner, Mancha } from '../../assets';

export const HomeBanner = () => {
    return (
        <>
            <div className="Banner">
                <img className="mancha" src={Mancha} />
                <img className="imagem-banner" src={Banner} />
            </div>
        </>
    )
};
