import '../styles/Project.sass'
function Project(props){
    const {domain} = props
    const URL = import.meta.env.VITE_GET_ICONS_URL


    return(
        <img className='Project' src={`${URL}?domain=${domain}&sz=128`} alt='image'/>
    )
}

export default Project