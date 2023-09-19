import { GitHubIcon, LinkedInIcon, InstagramIcon,WhatsAppIcon } from '../../../../public/Icons'
import '../styles/Links.sass'

function Links(){
    return(
        <ul className='Links'>
            <li className='Link'><a href='https://github.com/renandp03'><GitHubIcon/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><LinkedInIcon/></a></li> 
            <li className='Link'><a href='https://www.instagram.com/renan_dp/'><InstagramIcon/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><WhatsAppIcon/></a></li> 
        </ul>
    )
}

export default Links