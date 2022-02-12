import Project from './Project';
import { projects } from '../../data';
import './Projects.css'

const Projects = () => {

    return (
        <div className="p">
            <div className='p-wrapper'>
                <div className='p-title'>Projektek</div>
                <div className='p-ps'>

                    { projects.map((item) => (
                        <Project key={item.id} 
                                img={item.img} 
                                img2={item.img2} 
                                link={item.link}
                                desc={item.desc}/>
                    ))}
                   
                </div>
            </div>
        </div>
    )
}

export default Projects;