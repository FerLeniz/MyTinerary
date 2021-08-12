import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// import CityCard from '../components/CityCard'

export default class Cities extends React.Component {
  state = {
    nameCity: "",
    arrCities: [],
  };

  render() {
    let citiesArr = [
      {
        id: 1,
        country: "Mexico",
        name: "Mexico city",
        url:
          "https://th.bing.com/th/id/R.f124a63611bfdcec864d7a22cfe0d2b7?rik=3EK6hlHoJWa%2baQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-0q9rkfRVfPU%2fUxW9bpbouJI%2fAAAAAAAAd3Y%2ffh5Eb9jsn9w%2fs1600%2fMexico-City-Mexico.jpg&ehk=8hLyAwb74rVYzHHpsJpdPGMRXSdBg5x472ixn%2bo9DHc%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 2,
        country: "Colombia",
        name: "Caño Cristales",
        url:
          "https://th.bing.com/th/id/R.b9cc39a6a32530f8e0d4b971651ec44a?rik=WhdCjrQdoASKhw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-u-x-KRsOKvU%2fVFdJcWrNTPI%2fAAAAAAABCcg%2ftSwtD8lXBSA%2fs1600%2fColombia_Cano_Cristales.jpg&ehk=CAmy%2fKWzdRjU7HOEm%2bYGoEOANeK9pROjHA0Pvg5rexg%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 3,
        country: "Argentina",
        name: "Buenos Aires",
        url:
          "https://www.reportur.com/wp-content/uploads/2020/11/ciudad-de-buenos-aires.jpg",
      },
      {
        id: 4,
        country: "United States",
        name: "New York",
        url:
          "https://mediafiles.urlaubsguru.de/wp-content/uploads/2017/07/New-York-City-skyline-with-urban-skyscrapers-at-sunset.-shutterstock_147954134.jpg",
      },
      {
        id: 5,
        country: "Spain",
        name: "Madrid",
        url:
          "https://diario.madrid.es/wp-content/uploads/2017/06/WorldPride2017_CentroTurismoPlazaMayor-28429-1500x1000.jpg",
      },
      {
        id: 6,
        country: "Italy",
        name: "Milan",
        url:
          "https://careers.dazn.com/media/1277/milan-header.jpg?mode=max&width=1400&quality=75",
      },
      {
        id: 7,
        country: "Austria",
        name: "Viena",
        url:
          "https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-erasmus-en-viena-austria-por-svetla-2e81b87d9148ebddb5e26b38b057f1ab.jpg",
      },
      {
        id: 8,
        country: "Suiza",
        name: "Vevey",
        url:
          "https://viajes.nationalgeographic.com.es/medio/2018/12/28/vevey-suiza_27e0b3f4_1500x1124.jpg",
      },
      {
        id: 9,
        country: "France",
        name: "Paris",
        url:
          "https://evasion-online.com/imagearticle/2016/02/tourisme-paris.jpg",
      },
      {
        id: 10,
        country: "England",
        name: "London",
        url:
          "https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/London-England-Big-Ben-Cityscape-destinations-1200x900.jpg",
      },
      {
        id: 11,
        country: "Belgium",
        name: "Bruge",
        url:
          "https://th.bing.com/th/id/R.936db528c56e96f2f11d85779d7f2c71?rik=Z6PIxmTwXdG3dA&pid=ImgRaw&r=0",
      },
      {
        id: 12,
        country: "Holland",
        name: "Amsterdan",
        url:
          "https://th.bing.com/th/id/R.9dc835bfa96e0c7c16c06b763a16b226?rik=0fpXu4H60wwysQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-VdNIVUjuIbo%2fUuDi0VSvJpI%2fAAAAAAAAT3g%2f519V8Z8A8ZA%2fs1600%2fTurismo%2ben%2bAmsterdam%2c%2bHolanda.jpg&ehk=GBfl0pnG1jtKUZesiJ%2bafU6kdnR4uc7%2bFr3xZPxJuLg%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 13,
        country: "South Korea",
        name: "Seul",
        url:
          "https://content.r9cdn.net/rimg/dimg/ff/d2/794e703d-city-35982-1620c5d9650.jpg?width=1200&height=630&crop=true&xhint=2171&yhint=1322",
      },
      {
        id: 14,
        country: "Japan",
        name: "Tokyo",
        url:
          "https://cdn.audleytravel.com/-/-/79/1017424-shinjuku-district-tokyo.jpg",
      },
      {
        id: 115,
        country: "Thailand",
        name: "Bangkok",
        url:
          "https://www.thesportsbank.net/wp-content/uploads/2020/06/bangkok-city.jpg",
      },
      {
        id: 16,
        country: "China",
        name: "Shanghai ",
        url:
          "https://th.bing.com/th/id/R.c8a7520e34a9c356f11f7e5bda570c7e?rik=R%2fSMzLilw3o6%2fQ&pid=ImgRaw&r=0",
      },
    ];

    const prueba = (e) => {
      let named = e.target.value;
      this.setState({ nameCity: named,
        arrCities: citiesArr.filter((city) =>
        city.name.toLowerCase().startsWith(named.trim().toLowerCase())
      )
    });
    //   citiesArr = citiesArr.filter((city) =>
    //     city.name.toLowerCase().startsWith(named.trim().toLowerCase())
    //   );
    };

    return (
      <>
        {console.log(this.state.arrCities)}
        <Header />
        <div className="imgCities d-flex justify-content-end container.fluid text-center">
          <h1 className="mb-5 animate__animated animate__rubberBand">
            Find cities!
          </h1>
          <Row className="shadow my-2">
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
                onChange={prueba}
              />
            </Col>
          </Row>
        </div>
        <div className=" container-fluid ">
          <div className="row my-3 ">
            {this.state.arrCities.map((city) => {
              return (
                <div
                  className="col-md-6 col-sm-12 my-3 d-flex justify-content-center shadow"
                  key={city.id}
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
              );
            })}
          </div>

          {/* <div className="row my-3 ">
        <div className="col-md-6 col-sm-12 my-3 d-flex justify-content-center shadow">
            <div className="cityCard " style={{
            backgroundImage: `url("https://th.bing.com/th/id/OIP.aD_72j_oENXIbLT3RgfTxgHaHg?pid=ImgDet&rs=1")`,
        }}></div></div> */}
        </div>
        {/* <CityCard allCities={this.citiesArr} /> */}
        <Footer />
      </>
    );
  }
}
