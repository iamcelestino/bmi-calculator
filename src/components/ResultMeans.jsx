import './ResultMeans.css'
import resultMeansImg1 from '../assets/images/resultMeans1.png';

export default function ResultMeans() {
    return(
    <div className="resultMeans-container">
        <div className='resultMeans-left'>
            <img src={resultMeansImg1} alt="" />
        </div>
        <div className='resultMeans-right'>
            <h2>What your BMI result means</h2>
            <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
    </div>
    )
}

//The p tag and img should change, depending on the result of the BMI calculator

//Created by Afrianodev