import { LinkedInIcon, InstagramIcon, WhatsAppIcon, GitHubIcon } from './Icons'
import '../styles/Links.sass'

function Links(){
    return(
        <ul className='Links'>
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><GitHubIcon/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><LinkedInIcon/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><InstagramIcon/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><WhatsAppIcon/></a></li> 
        </ul>
    )
}

export default Links