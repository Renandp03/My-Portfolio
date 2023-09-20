import {GitHubIcon, LinkedInIcon, InstagramIcon} from '../../../public/Icons'
import Links from '../Perfil/containers/Links'
import './styles/Introduction.sass'

function Introduction(){
    return(
        <div id='Introduction'>
            <div className='Introduction__Title_Space'>
                <h1 className='Introduction__Title'>
                    Olá, sou <span className='Introduction__Title--Colorful'>Renan</span>,<br/>Desenvolvedor Full Stack.
                </h1>
                <p className='Introduction__Text'>Soluções inteligentes para o que você precisar.</p>
                <Links/>
            </div>
            <div className='Introduction__Detail'/>
            <img className='Introduction__Img' src='imgs/Lion.svg' alt='Lion' />
        </div>
    )
}

export default Introduction