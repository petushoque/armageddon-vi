import './Asteroid.css'

export default function Asteroid(props) {

    console.log(props)

    return (
        <div className='Asteroid'>
            <h2>{props.asteroid && props.asteroid.id}</h2>
        </div>
    )
}