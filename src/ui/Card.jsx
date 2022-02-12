import './Card.css'

const Card = ({place, title, year, desc}) => {
    return (
        <div className='e-item'>
            <h1>{title}</h1>
            <div>{year}</div>
            <h2>{place}</h2>
            <div>{desc}</div>
        </div>
    )
}

export default Card;