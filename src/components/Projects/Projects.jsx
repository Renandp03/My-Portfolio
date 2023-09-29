import Project from "./containers/Project"
import {WhatsAppIcon, ProjectsDetail} from '../../../public/Icons'
import './styles/Projects.sass'
function Projects(){
    return(
        <div id='Projects'>
            <h1 className="Projects__Title">PROJE<br/>TOS<ProjectsDetail className='Projects__Title__Decorator'/></h1>
            <Project domain={'https://www.cartoonnetwork.com.br/'}/>
        </div>
    )
}

export default Projects