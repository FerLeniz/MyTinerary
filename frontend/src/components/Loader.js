import imgLoading from "../assets/loader.gif";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Loader = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="animate__animated animate__flash">Loading...</h1>
        <img className="w-50" src={imgLoading} alt="this is error search" />
      </div>
      <Footer />
    </>
  );
};

export default Loader;
