const CityCard = ({ allCities }) => {
  return (
    
    <div className=" container-fluid d-flex flex-wrap">  
      <div className="row my-3 ">
        
          {allCities.map((city) =>{
            return(<div className="col-md-6 col-sm-12 my-3 d-flex justify-content-center shadow" key={city.id}>
            <div
              className="cityCard d-flex align-items-center"
              style={{
                backgroundImage: `url(${city.url})`,
              }}
            ><h3 className=" text-white text-center cityTitle">{city.name} - {city.country} </h3> </div>
          </div>)
          }
          )}
      </div>

      {/* <div className="row my-3 ">
        <div className="col-md-6 col-sm-12 my-3 d-flex justify-content-center shadow">
            <div className="cityCard " style={{
            backgroundImage: `url("https://th.bing.com/th/id/OIP.aD_72j_oENXIbLT3RgfTxgHaHg?pid=ImgDet&rs=1")`,
        }}></div></div> */}
    </div>
  );
};

export default CityCard;
