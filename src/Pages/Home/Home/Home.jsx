import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Serveces/Services";


const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;