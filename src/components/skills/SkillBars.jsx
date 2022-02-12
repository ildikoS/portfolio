import React from "react";
import { motion } from 'framer-motion';

class SkillBars extends React.Component {

    constructor(props) {
        super(props);     
    }

    render() {
        const { hue, saturation, skills } = this.props;
        
        return (
            <div className="container">
                <ul className="skills">
                    {skills.map((skill, index) => 
                        <motion.li key={skill.type}
                            initial={{width:0}} 
                            animate={{width: `${skill.level}%`}} 
                            transition={{ ease: "easeOut", duration: 2 }}
                            style={{backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)`}}
                        >
                            <p>{skill.type}<span>{skill.level}%</span></p>
                        </motion.li>
                    )}
                </ul>
            </div>
        )
    }
}

export default SkillBars;