import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook-round-svgrepo-com 1.png'
import instagram from '../../assets/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/twitter-2-svgrepo-com 1.png'
import { FooterStyle, Branding, SocialMedia, Disclaimer } from './styles'

const Footer = () => (
  <FooterStyle>
    <Branding src={logo} alt="Logo do efood" />
    <SocialMedia>
      <a
        href="https://github.com/BrunoRbt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="Facebook" />
      </a>
      <a
        href="https://github.com/BrunoRbt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="Instagram" />
      </a>
      <a
        href="https://github.com/BrunoRbt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" />
      </a>
    </SocialMedia>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterStyle>
)

export default Footer
