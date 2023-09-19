import './styles/Introduction.sass'

function Introduction(){
    return(
        <div id='Introduction'>
            <h1 className='Introduction__Title'>
                Olá, sou <span className='Introduction__Title--Colorful'>Renan</span>,<br/>Desenvolvedor Full Stack.
            </h1>
            <div className='Introduction__Detail'/>
            <img className='Introduction__Img' src='imgs/Lion.svg' alt='Lion' />
        </div>
    )
}

export default Introduction