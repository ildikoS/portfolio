import { motion } from 'framer-motion';
import './Intro.css'
import linkedinlogo from '../../img/linkedin.png';
import githublogo from '../../img/github.png';
import messengerlogo from '../../img/messsenger.png';

const Intro = () => {
    return (
        <div className="i">
            <div className='i-wrapper'>
                <div className="i-about">
                    <motion.div initial={{y:250, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}}>
                        <h2 className='i-intro'>Üdv, a nevem</h2>
                    </motion.div>
                    <motion.div initial={{y:250, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.1}}>
                        <h1 className='i-name'>Soltész Ildikó</h1>
                    </motion.div>
                    <motion.div initial={{y:250, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.2}}>
                        <div className='i-links'>
                            <div className='i-links-item' >
                                <a href='https://www.linkedin.com/in/ildik%C3%B3-solt%C3%A9sz-372030218/' target="_blank" rel="noreferrer">
                                    <img src={linkedinlogo} alt={linkedinlogo} style={{width:40}}/>
                                </a>
                            </div>
                            <div className='i-links-item'>
                                <a href='https://github.com/ildikoS' target="_blank" rel="noreferrer">
                                    <img src={githublogo} alt={githublogo} style={{width:40}}/>
                                </a>
                            </div>
                            <div className='i-links-item'>
                                <a href='https://m.me/ildiko.solteesz' target="_blank" rel="noreferrer">
                                    <img src={messengerlogo} alt={messengerlogo} style={{width:40}}/>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{y:250, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.4}}>
                        <div className='i-desc'>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Intro;