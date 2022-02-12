import './Skills.css'
import { skillsLangs, skillsTechs } from "../../data";
import SkillBars from './SkillBars';


const Skills = () => {
    return (
        <div className="s">
            <div className='s-wrapper'>
                <div className='s-title'>Készségek</div>
                <div className='s-skills'>
                    <div className='s-langs'>Programnyelvek</div>
                    <SkillBars hue="185" saturation="70" skills={skillsLangs} />
                    <div className='s-techs'>Technológiák</div>
                    <SkillBars hue="185" saturation="70" skills={skillsTechs} />
                </div>
            </div>
        </div>
    )
}

export default Skills;