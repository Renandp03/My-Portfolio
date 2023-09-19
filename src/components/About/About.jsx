import TecList from './containers/TecList'
import './styles/About.sass'

function About(){
    return(
        <div id='About'>
            <h1 className='About__Title'>Sobre Mim<span className='About__Detail'>.</span></h1>
            <p className='About__Text'>
                Sou um desenvolvedor Full Stack formado pela Driven Education e atualmente procuro me desenvolver profissionalmente
                me envolvendo em grandes projetos.
            </p>
            <TecList/>
        </div>
    )
}

export default About