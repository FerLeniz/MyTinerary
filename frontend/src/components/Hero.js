import Button from 'react-bootstrap/Button';

const Hero = () =>{
    return(
        <div className="imgHero"> 
            <p className="popularText fs-1"> Hi user ! discover your favourite city :D</p>
            <Button className="my-3 py-2 px-2" variant="primary" size="lg">Click here!</Button>{' '}
        </div>
    )
}

export default Hero