import { GitHubIcon, LinkedInIcon, InstagramIcon,WhatsAppIcon, EmailIcon} from '../../../../public/Icons'
import '../styles/Links.sass'

function Links(){
    const ICONS_CLASSNAME = 'Link__Icon'
    return(
        <ul className='Links'>
            <li className='Link'><a href='https://github.com/renandp03'><GitHubIcon className={ICONS_CLASSNAME}/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><LinkedInIcon className={ICONS_CLASSNAME}/></a></li> 
            <li className='Link'><a href='https://www.instagram.com/renan_dp/'><InstagramIcon className={ICONS_CLASSNAME}/></a></li> 
            <li className='Link'><a href='https://www.linkedin.com/in/renan-damascena/'><WhatsAppIcon className={ICONS_CLASSNAME}/></a></li> 
        </ul>
    )
}

export default Links