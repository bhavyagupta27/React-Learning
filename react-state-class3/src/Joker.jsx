import {useState, useEffect} from "react";
export default function Joker(){
    let [joke, setJoke] = useState({});
    const URL="https://v2.jokeapi.dev/joke/Any?type=twopart";

    const getnewJoke = async() =>{
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({setup: jsonResponse.setup ,punchline: jsonResponse.punchline})
    }
    return(
    <div>
        <h3>Joker!</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getnewJoke}>New Joke</button>
    </div>
    )
}