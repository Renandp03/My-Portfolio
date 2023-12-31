import { HTML5, CSS3, JavaScript, TypeScript, React, Vite, Jest, Node,MongoDB, PostgreSQL,SASS, Nest, Next } from '../../../../public/Icons'
import '../styles/TecList.sass'

function TecList(){

    const ICONS_CLASSNAME = 'TecList__Icon'

    const tecs = [
        {name:'HTML5',icon:<HTML5 className={ICONS_CLASSNAME}/>, link:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {name:'CSS3',icon:<CSS3 className={ICONS_CLASSNAME}/>, link:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {name:'JavaScript',icon:<JavaScript className={ICONS_CLASSNAME}/>, link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {name:'TypeScript',icon:<TypeScript className={ICONS_CLASSNAME}/>, link:'https://www.typescriptlang.org/docs/'},
        {name:'React',icon:<React className={ICONS_CLASSNAME}/>, link:'https://legacy.reactjs.org/docs/getting-started.html'},
        {name:'Vite',icon:<Vite className={ICONS_CLASSNAME}/>, link:'https://vitejs.dev/'},
        {name:'Next',icon:<Next className={ICONS_CLASSNAME}/>, link:'https://nextjs.org/docs'},
        {name:'SASS',icon:<SASS className={ICONS_CLASSNAME}/>, link:'https://sass-lang.com/documentation/'},
        {name:'Node',icon:<Node className={ICONS_CLASSNAME}/>, link:'https://nodejs.org/en/docs'},
        {name:'Nest',icon:<Nest className={ICONS_CLASSNAME}/>, link:'https://docs.nestjs.com/'},
        {name:'MongoDB',icon:<MongoDB className={ICONS_CLASSNAME}/>, link:'https://www.mongodb.com/pt-br'},
        {name:'PostgreSQL',icon:<PostgreSQL className={ICONS_CLASSNAME}/>, link:'https://www.postgresql.org/docs/'},
        {name:'Jest',icon:<Jest className={ICONS_CLASSNAME}/>, link:'https://jestjs.io/'},
    ]

    return(
        <div className='TecList'>
            <h1 className='TecList__Title'>Minhas tecnologias</h1>
            {tecs.map((t) => 
                <a href={t.link} 
                className='TecList__Link'
                id={t.name}
                key={t.name}>
                    {t.icon}
                    {t.name}
                </a>)}
        </div>    
    )
}

export default TecList