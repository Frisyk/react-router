import Header from "../components/Header";
import Footer from "../components/Footer";

const FavPages = () => {
    let number = 0;
    let footer;
    if  (number > 0) {
        footer = <Footer />
    }
    return (
        <div className="fav-pages">
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">My Favorite</h1>
                    <p className="no-fav">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In soluta molestias nihil dolorum doloribus asperiores molestiae et tempora, nam nobis, reprehenderit quidem quis! Quia quasi doloremque, voluptate rem suscipit velit!</p>
                    <div className="blog-list">
                        
                    </div>
                </div>
            </div>
            {footer}
        </div>
    );
}

export default FavPages;