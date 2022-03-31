import GifLopping from "./ImageGif";
import axios from "axios";
import {useState} from "react";


const GiphySearch = () => {
    const [gif, setGif] = useState([]);
    const [query, setQuery] = useState('');
    const apiKey = "uwiKd4ybsSDPVQ0NV9UW6xjx9U7BfkcD";

    const handleOnChange = (e) => {
        //dapetin nilai input value
        setQuery(e.target.value)
    }

        const getGif = async () => {
            const gifs = await axios 
            .get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=12`)
            .then((response)=> response)
            .catch((error) => error)
            setGif(gifs.data.data)
            console.log(gifs);
        }
    
        return (
            <div>
                <input type="text" name="search" id="search" onChange={handleOnChange} />
                <button className="fa fa-search" type="submit" onClick={(e)=>{getGif()}}>Search</button>
                {gif !== undefined && (<GifLopping data={gif}/>)}
            </div>
        )
    };

export default GiphySearch;
