import './Project.css'

const Project = ({img, img2, link, desc}) => {

    const handleMouseEnter = e => {
        e.target.style.backgroundImage = img2
    }
    const handleMouseLeave = e => {
        e.target.style.backgroundImage = img
    }

    return (
        <div className='p-outline'>
            <a href={link} target="_blank" rel="noreferrer"> 
                <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 
                    style={{backgroundImage:img}}
                    className='p-project'>
                </div>
                
            </a>
            <div className='desc'>{desc}</div>
        </div>
    )
}

export default Project;