import Links from './containers/Links'
import './styles/Perfil.sass'

function Perfil(){
    return(
        <div id='Perfil'>
            <img src='https://i.pinimg.com/564x/ae/bb/52/aebb524666bc7dd96bea7db24c8a3e93.jpg' alt='Perfil_img' className='Perfil__Img'/>
            <h1 className='Perfil__Title'>Renan Damascena | Desenvolvedor Full Stack</h1>
            <Links/>
        </div>
    )
}

export default Perfil