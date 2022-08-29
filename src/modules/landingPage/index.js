import Header from "./header";
import Slider from "./slider";
import FeatureItem from "../../components/featureItem";
import {featureData} from "../../constants/featureData"
function LandingPage(){
    return(
        <div>

            <Header/>
            <Slider/>
            {                   //yeha par ma nay abi javaScript laki hai os may hum nay map ka concpet para hai Hum featureData.js may arrys bai hai hum nay os par map chalya hai map hum ko one by one ek ek item data hai
                featureData.map((item)=> <FeatureItem  data={item}/>) 
            }
            {/* <FeatureItem/> */}

        </div>

    );
}
export default LandingPage;