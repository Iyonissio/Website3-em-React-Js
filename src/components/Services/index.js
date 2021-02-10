import React from 'react';
import Icon1 from '../../images/img1.svg';
import Icon2 from '../../images/img6.svg';
import Icon3 from '../../images/img5.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper,
ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Nossos Servicos</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduza Gastos </ServicesH2>
                        <ServicesP>Nossos Servicos os melhores do Pais</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Reduza Gastos 2 </ServicesH2>
                        <ServicesP>Nossos Servicos os melhores do Pais 2</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Reduza Gastos 3</ServicesH2>
                        <ServicesP>Nossos Servicos os melhores do Pais 3</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
            
        </>
    )
}

export default Services;
