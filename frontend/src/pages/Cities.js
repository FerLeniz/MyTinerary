import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from 'axios';
// import CityCard from '../components/CityCard'
import {Link} from 'react-router-dom'

export default class Cities extends React.Component {
  state = {
    // nameCity: "",
    actualArr:[],
  };

  componentDidMount() {
     axios.get('http://localhost:4000/api/data')
     .then(res =>{
     const arr= res.data.response;
    this.setState({
      actualArr:arr
    })
    //  this.setState({arrCities: citiesArr})
    //  console.log(this.state.arrCities)
      // const actualArr =
      // this.state.arrCities.length < 1 ? citiesArr : this.state.arrCities;
     console.log('me renderizo en didMount')
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevState){
    // if(prevState != this.state.arrCities){

    // } 
  }


  render() {
       //LO QUE USABA PARA FILTRAR

      // const actualArr =
      // this.state.arrCities.length < 1 ? citiesArr : this.state.arrCities;


    //onChange event
    const filterCountry = (e) => {
         let named = e.target.value;
         this.setState({ 
          actualArr: this.state.actualArr.filter((city) =>{
            return city.name.toLowerCase().indexOf(named.trim().toLowerCase()) > -1
          })
          
              //  city.name.toLowerCase().startsWith(named.trim().toLowerCase())),
         })
        console.log(this.state.actualArr)
        //FILTRADOR DEL INPUT
        // this.setState({nameCity:named})
        
        // this.setState({
        //     //nameCity: named,
        //     arrCities: this.state.arrCities.filter((city) =>
        //       city.name.toLowerCase().startsWith(named.trim().toLowerCase())),
        //     //actualArr: this.state.arrCities.length < 1 ? this.state.firstArr : this.state.arrCities
        // });

        //   citiesArr = citiesArr.filter((city) =>
        //     city.name.toLowerCase().startsWith(named.trim().toLowerCase())
        //   );
      };
      
      
      return (
        <>
        {console.log(this.state.actualArr)}
          <Header />
          <div className="imgCities d-flex justify-content-end container.fluid text-center">
            <h1 className="mb-5 animate__animated animate__rubberBand">
              Find cities!
            </h1>
            <Row className="shadow my-2 ">
              <Form.Label column="lg" lg={2} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-down-circle-fill text-white footerIcon d-lg-none"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                </svg>
              </Form.Label>
             <Col>
               <Form.Control
                 className="shadow"
                 size="md"
                 type="text"
                 placeholder="► Search a city..."
                 onChange={filterCountry}
               />
             </Col>
           </Row>
        </div>
          <div className=" container-fluid ">
            <div className="row my-3 ">
               {this.state.actualArr.length === 0 ? <h1>Oh no! There's no city...</h1>
               : this.state.actualArr.map((city) => {
                return (
                  <Link key={city.id} to={`/city/${city.id}`} className="col-md-6 col-sm-12 my-3">
                  <div
                    className=" d-flex justify-content-center shadow"

                  >
                    <div
                      className="cityCard d-flex align-items-center"
                      style={{
                        backgroundImage: `url(${city.url})`,
                      }}
                    >
                      <h3 className=" text-white text-center cityTitle">
                        {city.name} - {city.country}{" "}
                      </h3>{" "}
                    </div>
                  </div>
                  </Link>
                );
              })} 
            </div>
          </div>
          <Footer />
        </>
      );
  }
}

