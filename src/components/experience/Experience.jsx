import './Experience.css'
import Card from '../../ui/Card';

const Experience = () => {
    return (
        <div className="e">
            <div className='e-wrapper'>
            <div className='e-title'>Tapasztalat</div>
                <div className='e-top'>
                    <div className='e-s'>Tanulmányok</div>
                    <div className='e-cards'>
                        <Card year='2014 - 2019'
                            title='Nyelvi előkészítő'
                            place='Ócsa Bolyai János Gimnázium'
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        />
                        <Card year='2019 - jelen'
                            title='Programtervező-informatika'
                            place='Eötvös Loránd Tudományegyetem'
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        />
                    </div> 
                </div>
                <div className='e-bottom'>
                    <div className='e-w'>Munkatapasztalat</div>
                    <div className='e-cards'>   
                        <Card year='2022 - jelen'
                            title='Software developer intern'
                            place='SAP Hungary Kft.'
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;