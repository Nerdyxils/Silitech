import React from 'react'
import HeroSection from '../HeroSection'
import { homeObjThree } from '../HomePage/Data';

function Signup() {
    return (
        <>
            <HeroSection {...homeObjThree} />
        </>
    );
}

export default Signup
