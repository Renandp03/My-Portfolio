import {FaLinkedinIn, FaReact} from 'react-icons/fa'
import '../styles/TecList.sass'

function TecList(){

    const tecs = [
        {name:'React',icon:<FaReact/>, link:'https://legacy.reactjs.org/docs/getting-started.html'},
        {name:'React',icon:<FaReact/>, link:'https://legacy.reactjs.org/docs/getting-started.html'},
        {name:'React',icon:<FaReact/>, link:'https://legacy.reactjs.org/docs/getting-started.html'},
    ]

    return(
        <div className='TecList'>
            {tecs.map((t) => 
                <a href={t.link} 
                className='TecList__Icon'
                id={t.name}
                key={t.name}>
                    {t.icon}
                </a>)}
        </div>    
    )
}

export default TecList