import TecList from './containers/TecList'
import './styles/About.sass'

function About(){
    return(
        <div id='About'>
            <div className='AboutMe'>
                <h1 className='About__Title'>Sobre Mim<span className='About__Detail'>.</span></h1>
                <p className='About__Text'>
                    Sou um desenvolvedor Full Stack formado pela Driven Education e atualmente procuro me desenvolver profissionalmente
                    me envolvendo em grandes projetos.
                </p>
            </div>
            
            <TecList/>
        </div>
    )
}

export default About