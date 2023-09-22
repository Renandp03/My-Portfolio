import {FaHtml5, FaCss3, FaReact, FaNodeJs} from 'react-icons/fa'
import { HTML5, CSS3, JavaScript, TypeScript, React, Vite, Jest, Node,MongoDB, PostgreSQL,SASS } from '../../../../public/Icons'
import '../styles/TecList.sass'

function TecList(){

    const ICONS_CLASSNAME = 'TecList__Icon'

    const tecs = [
        {name:'HTML5',icon:<HTML5 className={ICONS_CLASSNAME}/>, link:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {name:'CSS3',icon:<CSS3 className={ICONS_CLASSNAME}/>, link:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {name:'JavaScript',icon:<JavaScript className={ICONS_CLASSNAME}/>, link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {name:'SASS',icon:<SASS className={ICONS_CLASSNAME}/>, link:'https://sass-lang.com/documentation/'},
        {name:'TypeScript',icon:<TypeScript className={ICONS_CLASSNAME}/>, link:'https://www.typescriptlang.org/docs/'},
        {name:'React',icon:<React className={ICONS_CLASSNAME}/>, link:'https://legacy.reactjs.org/docs/getting-started.html'},
        {name:'Vite',icon:<Vite className={ICONS_CLASSNAME}/>, link:'https://vitejs.dev/'},
        {name:'Node',icon:<Node className={ICONS_CLASSNAME}/>, link:'https://nodejs.org/en/docs'},
        {name:'MongoDB',icon:<MongoDB className={ICONS_CLASSNAME}/>, link:'https://www.mongodb.com/pt-br'},
        {name:'PostgreSQL',icon:<PostgreSQL className={ICONS_CLASSNAME}/>, link:'https://www.postgresql.org/docs/'},
        {name:'Jest',icon:<Jest className={ICONS_CLASSNAME}/>, link:'https://jestjs.io/'},
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