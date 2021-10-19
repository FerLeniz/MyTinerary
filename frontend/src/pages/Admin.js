import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Admin extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          countries: null,
          userData: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            url: "",
            country: "",
          },
          errorsInput: {}
        };
    
        this.changeValue = this.changeValue.bind(this);
        //this.sendForm = this.sendForm.bind(this);
        //this.validateInput = this.validateForm.bind(this);
        this.toTop = this.toTop.bind(this);
      }

      changeValue(e) {
        let value = e.target.value;
        let field = e.target.name;
        this.setState({
          ...this.state,
          userData: { ...this.state.userData, [field]: value },
        });
      }

      toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
        });
      };

      render(){
          return(
          <>
             <Header/>
                <p>Estoy en Admin :D</p>
             <Footer/>
          </>)
      }
}

export default Admin