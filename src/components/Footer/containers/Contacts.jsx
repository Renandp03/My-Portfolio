import {WhatsAppIcon, LinkedInIcon} from '../../../../public/Icons'
import '../styles/Contacts.sass'

function Contacts(){
    const ICON_CLASSNAME = 'Contact__Icon'
    return(
        <div id='Contacts'>
            <h2 className='Contacts__Title'>Contatos</h2>
            <ul>
                <li className='Contact'><WhatsAppIcon className={ICON_CLASSNAME}/>Celular</li>
                <li className='Contact'><LinkedInIcon className={ICON_CLASSNAME}/>LinkedIn</li>
                <li className='Contact'>Email</li>
            </ul>
        </div>
    )
}

export default Contacts
