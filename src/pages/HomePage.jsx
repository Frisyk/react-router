import Header from "../components/Header";
// import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const HomePage = () => {
    const [values, setValues] = useState([])
    
    const sayhi = (e) => {
        console.log(e)
    }
    
    useEffect(() => {
        axios.get('http://localhost:3004/posts')
        .then(res => {
            console.log(res);
            setValues(res.data);
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Header />
            <div className="container">
                {
                    values.map((value) => (
                        <div key={value.id} className="card">
                            <h1 className="card-header">{value.title}</h1>
                            <p>{value.comment}</p>
                            <Button value='Remove' onClick={sayhi}/>
                        </div>
                    ))
                }
            </div>
        </div>
    ); 
}

export default HomePage;