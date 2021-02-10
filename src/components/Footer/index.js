import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,SocialIcons,
WebsiteRights, SocialIconLink} from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre nos</FooterLinkTitle>
                                <FooterLink to='/signin'>Como funciona</FooterLink>
                                <FooterLink to='/signin'>Testemunhos</FooterLink>
                                <FooterLink to='/signin'>Carreira</FooterLink>
                                <FooterLink to='/signin'>Investidores</FooterLink>
                                <FooterLink to='/signin'>Termos de Servico</FooterLink>  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact nos</FooterLinkTitle>
                                <FooterLink to='/signin'>Contacto</FooterLink>
                                <FooterLink to='/signin'>Website</FooterLink>
                                <FooterLink to='/signin'>Email</FooterLink>
                                <FooterLink to='/signin'>Investidores</FooterLink>
                                <FooterLink to='/signin'>Termos de Servico</FooterLink>  
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>
                                <FooterLink to='/signin'>Submeter Video</FooterLink>
                                <FooterLink to='/signin'>Testemunhos</FooterLink>
                                <FooterLink to='/signin'>Carreira</FooterLink>
                                <FooterLink to='/signin'>Agencias</FooterLink>
                                <FooterLink to='/signin'>Influencer</FooterLink>  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Midias Sociais</FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram <FaInstagram /></FooterLink>
                                <FooterLink to='/signin'>Facebook <FaFacebook /></FooterLink>
                                <FooterLink to='/signin'>Youtube <FaYoutube /></FooterLink>
                                <FooterLink to='/signin'>Twitter <FaTwitter /></FooterLink>
                                <FooterLink to='/signin'>Whatsapp <FaLinkedin /></FooterLink>  
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Iyonissio
                        </SocialLogo>
                        <WebsiteRights>Toggle Brains {new Date().getFullYear} Todos os Direitos Reservados </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
