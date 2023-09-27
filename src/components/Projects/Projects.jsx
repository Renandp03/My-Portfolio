import Project from "./containers/Project"
import {WhatsAppIcon} from '../../../public/Icons'
import './styles/Projects.sass'
function Projects(){
    return(
        <div id='Projects'>
            <h1 className="Projects__Title">PROJE <WhatsAppIcon className={'Project__Title__Decorator'}/><br/>TOS</h1>
            <Project domain={'https://www.cartoonnetwork.com.br/'}/>
            <Project domain={'https://projeto10-cineflex-phi-lime.vercel.app/'}/>
        </div>
    )
}

export default Projects