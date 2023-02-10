import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form"
import axios from "axios";
import { useState, useEffect } from "react";


const HomePage = () => {
    const [values, setValues] = useState([])
    const [post, setPost] = useState({
        id: 1,
        username: 1,
        title:'',
        body:'',
    })
    
    const getUser = () => {
        axios.get('http://localhost:3004/posts')
        .then(res => {
            console.log(res);
            setValues(res.data);
        })
        .catch(err => console.log(err))
    }

    const handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then(res => {
            console.log(res);
            getUser();
        })
    }
    
    const handleChange = (e) => {
        // console.log(e);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = {...post};
        form[e.target.name] = e.target.value;
        setPost({post: form})
        console.log(post);
    }

    useEffect(() => {
        getUser();
    }, [])


    return (
        <div>
            <Header />
            <Form onChange={handleChange} onClick={() => handleSubmit}/>
            <div className="container">
                {
                    values.map((value) => 
                        <div key={value.id} className="card">
                            <h1 className="card-header">{value.title}</h1>
                            <p>{value.comment}</p>
                            <button className="remove-btn" onClick={()=> handleRemove(value.id)}>Remove</button>
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    ); 
}

export default HomePage;