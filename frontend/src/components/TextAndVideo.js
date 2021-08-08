import video from '../assets/video.mp4'

const TextAndVideo=() => {
    return(
        <>
        
        <video  id="video" src={video} autoPlay muted loop></video>
        <div className="d-flex justify-content-center text-center">
        <div className="contentVideo">
            <h1 >MyTinerary</h1>
                <h2>"Find your perfect trip,
                designed by <span>insiders</span> who know and love their cities!"
                </h2>
            </div>
        </div>
        </>
    )
}

export default TextAndVideo