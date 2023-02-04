import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
    const username = 'Frisnadi'
   return (
    <div>
        <Header />
        <div className="container">
            <h1>Hi, {username}</h1>
            <h2>Have a nice day</h2>
        </div>
        <Footer />
    </div>
   ); 
}

export default HomePage;