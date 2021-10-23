import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { connect } from "react-redux"
// import userActions from "../redux/actions/userActions"
import citiesActions from "../redux/actions/citiesActions"

class Admin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: null,
      cityData: {
        name: "",
        image: "",
        country: "",
        currentMoney: "",
        language: "",
        description: "",
      },
      errorsInput: {},
    }

    this.changeValue = this.changeValue.bind(this)
    this.sendForm = this.sendForm.bind(this)
    this.getActualCities = this.getActualCities.bind(this)
    //this.validateInput = this.validateForm.bind(this);
    this.toTop = this.toTop.bind(this)
  }

  changeValue(e) {
    let value = e.target.value
    let field = e.target.name
    this.setState({
      ...this.state,
      cityData: { ...this.state.cityData, [field]: value },
    })
  }

  componentDidMount() {
    this.toTop()
    this.getActualCities()
  }

  async getActualCities() {
    try {
      await this.props.getCities()
    } catch (error) {
      console.log(error)
    }
  }

  async sendForm() {
    try {
      if (Object.values(this.state.cityData).some((value) => value === "")) {
        toast.error("Complete all fields !", {
          position: "top-right",
        })
      } else {
        let res = await this.props.addCity(this.state.cityData)
        console.log(res)
        this.setState({...this.state,cityData: {
          name: "",
          image: "",
          country: "",
          currentMoney: "",
          language: "",
          description: "",
        }})
        await this.props.getCities()
        console.log(this)

        //CARGAR NUEVAS CIUDADES, AGREGAR en ACTIONS que le pegue A la APII
      }
    } catch (error) {
      console.log(error)
    }
  }

  toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }

  render() {
    return (
      <>
        <Header />
        <div className="row">
        <div className="col-sm-12 col-md-6">
            <h1 className="text-center bg-dark text-white">Recently added</h1>
            <div className="divCityAdmin">
              {this.props.allCitiesArr !== undefined &&
                this.props.allCitiesArr.map((city, index) => (
                  <div className="row" key={index}>
                    <div className="col-6">
                      <p className="text-center">{city.name}</p>
                    </div>
                    <div className="col-6">
                      <div>
                        <i className="fas fa-edit cursor px-2"></i>
                        <i className="fas fa-trash-alt cursor"></i>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h1 className="text-center bg-dark text-white">Form</h1>
            <div className="d-flex justify-content-center ">
            <form className=" bg-primary bg-gradient rounded py-3 w-50 d-flex justify-content-center align-items-center flex-column">
              <input
                onChange={this.changeValue}
                placeholder="name"
                type="text"
                name="name"
                value={this.state.cityData.name}//aAGREGAR A LOS OTROS !!!
                className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput my-1"
              />
              <input
                onChange={this.changeValue}
                placeholder="image url"
                type="text"
                name="image"
                value={this.state.cityData.image}
                className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput my-1"
              />
              <input
                onChange={this.changeValue}
                placeholder="country"
                type="text"
                name="country"
                className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput my-1"
              />
              <input
                onChange={this.changeValue}
                placeholder="currentMoney"
                type="text"
                name="currentMoney"
                value={this.state.cityData.currentMoney}
                className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput my-1"
              />
              <input
                onChange={this.changeValue}
                placeholder="language"
                type="text"
                name="language"
                value={this.state.cityData.language}
                className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput my-1"
              />
              <input
                onChange={this.changeValue}
                placeholder="description"
                type="text"
                value={this.state.cityData.description} 
                name="description"
                className=" fs-4 rounded-pill shadow border border-light noOtuline borderInput my-1"
              />
              {/* <input type="submit" value="Submit" /> */}
            </form>
            </div>
           
            <div className="d-flex justify-content-center">
              <button
                className="my-2 py-1 px-3 viewMore"
                onClick={this.sendForm}
              >
                <p className="fs-4 ">Add city</p>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allCitiesArr: state.cities.allCitiesArr,
    //userStatus: state.user.userStatus,
  }
}

const mapDispatchToProps = {
  getCities: citiesActions.getAllCities,
  addCity: citiesActions.addCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
