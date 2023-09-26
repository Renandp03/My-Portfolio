import {WhatsAppIcon, LinkedInIcon, EmailIcon} from '../../../../public/Icons'
import '../styles/Contacts.sass'

function Contacts(){
    const ICON_CLASSNAME = 'Contact__Icon'
    return(
        <div id='Contacts'>
            <h2 className='Contacts__Title'>Contatos</h2>
            <ul>
                <li className='Contact'><WhatsAppIcon className={ICON_CLASSNAME}/>(21) 95908-4889</li>
                <li className='Contact'><LinkedInIcon className={ICON_CLASSNAME}/>LinkedIn</li>
                <li className='Contact'><EmailIcon className={ICON_CLASSNAME}/>renandamascena@gmail.com</li>
            </ul>
        </div>
    )
}

export default Contacts
