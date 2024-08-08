import { RECOMENDATIONS } from "../data";

export default function Recomendations({...props}) {

    const listRecomendation = RECOMENDATIONS.map(recomendation => 
        <div key={recomendation.icon}>
            <img src={recomendation.icon} alt={recomendation.title} />
            <h3>{recomendation.title}</h3>
            <p>{recomendation.paragraph}</p>
        </div>
    );

    return (
        <div {...props}>
            {listRecomendation}
        </div>
    );
}