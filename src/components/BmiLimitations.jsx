import { LIMITATIONS } from "../data";

export default function BmiLimitations({...props}) {

    const limitations = LIMITATIONS.map(limitation => 
        <div key={limitation.icon} >
            <img src={limitation.icon} alt={limitation.title} />
            <h3>{limitation.title}</h3>
            <p>{limitation.paragraph}</p>
        </div>);

    return (
        <div>
            {limitations}
        </div>
    )
}