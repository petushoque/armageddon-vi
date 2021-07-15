import './Asteroid.css'

export default function Asteroid(props) {

    console.log(props)

    return (
        <div key={props.asteroid && props.asteroid.id} className='Asteroid'>
            <div className='Asteroid__illustration'>
                <div className='Asteroid__illustration_asteroid'></div>
                <div className='Asteroid__illustration_statue'></div>
                <h2 className='Asteroid__title'>{props.asteroid && props.asteroid.name}</h2>
            </div>
            <div className='Asteroid__information'>
                <div className='Asteroid__information_row'>
                    <p className='Asteroid__paragraph'>Дата</p>
                    <p className='Asteroid__information_dots'></p>
                    <p className='Asteroid__paragraph'>{props.asteroid && props.asteroid.close_approach_data[0].close_approach_date_full}</p>
                </div>

                <div className='Asteroid__information_row'>
                    <p className='Asteroid__paragraph'>Диаметр, м</p>
                    <p className='Asteroid__information_dots'></p>
                    <p className='Asteroid__paragraph'>{props.asteroid && props.asteroid.estimated_diameter.meters.estimated_diameter_max}</p>
                </div>

                <div className='Asteroid__information_row'>
                    <p className='Asteroid__paragraph'>Расстояние, км</p>
                    <p className='Asteroid__information_dots'></p>
                    <p className='Asteroid__paragraph'>{props.asteroid && props.asteroid.close_approach_data[0].miss_distance.kilometers}</p>
                </div>

            </div>
            
        </div>
    )
}