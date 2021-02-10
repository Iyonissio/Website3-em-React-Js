import React, {useState} from 'react';
import { HeroContainer , HeroBg, HeroContent,
HeroP, HeroBtnWrapper,HeroH1,  ArrowForward, ArrowRight} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                
            </HeroBg >
            <HeroContent>
                <HeroH1>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</HeroH1>
                <HeroP>
                    Cadastre-se e crie a sua conta 
                    e habilite-se a ganhar um Bonus
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                        primary='true'
                                        dark='true'>
                        Inicio {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>           
        </HeroContainer>
    );
};

export default HeroSection;
