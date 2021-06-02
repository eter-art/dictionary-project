import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
 // eslint-disable-next-line
    function handleDictionResponse (response){
        setResults(response.data[0]);
    }


     function handlePexelsResponse(response){
     setPhotos(response.data.photos);
     }


    function search () {
  
   let apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  // eslint-disable-next-line
    axios.get(apiUrl). then(handleDictionResponse);

     let pexelsApiKey= "563492ad6f91700001000001666dd97fd0df4d40a0ece4b2239244d0";
     let pexelsApiUrl =  `https://api.pexels.com/v1/search?query=${keyword} &per_page=3`;
     let headers = {"Authorization" : `Bearer ${pexelsApiKey}`} 
     // eslint-disable-next-line
      axios.get(pexelsApiUrl, { headers: headers} ). then(handlePexelsResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
      search ();
      
    }

 

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load (){
        setLoaded(true);
        search();
    }

if  (loaded){
 return ( 
        <div className="Dictionary">
            <section>
                <h1>What Word do you want to look up</h1>
            <form onSubmit ={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} defaultValue={props.defaultKeyword} />
            </form>
            </section>
            <Results results={results} />
            <Photos photos = {photos} />
        </div>
    );
} else{
    load();
    return "Loading";
}
}

   