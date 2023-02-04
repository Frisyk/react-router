import Header from "../components/Header";
import Footer from "../components/Footer"; 

const AuthorPage = () => {
  return ( 
    <div>
        <Header />
        <div className="container">
            <div className="inner-container">
            <h1 className="page-title">About the Author : Frisyk</h1>
            <img src="./img/profile.jpg" className="hero-image" alt="frisyk" />
            <div className="blog-content">
                <p className="blog-text">someone who does not have an IT background or major in computers or engineering, but is very interested in things related to IT, especially about web development. That's me, Frisyk. I started learning about web development during the semester break in 2022. Starting from the basics (HTML, CSS, and JS) to frameworks (tailwind, react) and others, I did it self-taught, both from reading articles on the internet and videos on YouTube. until now I still continue to learn and explore about this web development. My goal is to become a reliable and competent web developer, so that I can compete in the global industry in this ever-advancing era.</p> <br />
                <div className="link">
                    <p>Connect with me : </p>
                    <a target="_blank" href="https://github.com/frisyk">github   </a>
                    <a target="_blank" href="https://www.instagram.com/frisnadiyk/">instagram  </a>
                    <a target="_blank" href="https://codepen.io/frisyk">codepen  </a>
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
 
export default AuthorPage;