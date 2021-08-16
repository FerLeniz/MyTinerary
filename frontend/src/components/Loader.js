import imgLoading from "../assets/loader.gif";

const Loader =()=>{
    return(
        <>
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="animate__animated animate__flash">Loading...</h1>
            <img src={imgLoading} alt="this is error search" />
          </div>
        </>
    )
}

export default Loader