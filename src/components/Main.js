import './Main.css';
import Asteroid from './Asteroid';

export default function Main(props) {
    return (
        <div className='Main'>
        {props.asteroids && props.asteroids.map((asteroid) => (
            <Asteroid asteroid={asteroid}/>
        ))}
        </div>
    )
}