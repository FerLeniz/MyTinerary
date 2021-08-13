import Header from '../components/Header'
import Footer from '../components/Footer'
const City=(props)=>{
    return(
        <>
        {console.log(props)}
        <Header/>
        <h1>HEY you re in {props.match.params.id}</h1>
        <Footer/>
        </>
    )
}
 
export default City