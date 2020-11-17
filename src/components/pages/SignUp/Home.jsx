
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne,homeObjThree,homeObjTwo,homeObjFour} from './Data'
function SignUp() {
    return (
       <>
       
       <Pricing />
       <HeroSection {...homeObjOne} />
       </>
    )
}

export default SignUp
