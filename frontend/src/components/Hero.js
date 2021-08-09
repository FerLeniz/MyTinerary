import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



const Hero = () =>{
    return(
        <div className="imgHero"> 
            <p className="popularText fs-1 animate__animated animate__bounce animate__delay-2s"  > Hey ! discover your favourite city </p>
            <Link to="/Cities"><Button className="my-3 py-3 px-2 shadow" variant="primary" size="lg" >Click here</Button>{' '}</Link>
            
        </div>
    )
}

export default Hero