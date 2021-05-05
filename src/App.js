import "./styles.css";
import { useState, useEffect } from "react";
import Select from "./select";
import Response from "./response";
export default function App() {
  const [planet, setPlanet] = useState([]);
  const [time, setTime] = useState(0);
  const loop = [1, 1, 1, 1];
  useEffect(() => {
    let arr = [];
    fetch("https://findfalcone.herokuapp.com/planets")
      .then((response) => response.json())
      .then((data) => {
        arr = [...data.map((i) => ({ ...i, select: false }))];
        setPlanet(arr);
      });
    // console.log(planet);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(id);
  }, [time]);
  const handlehange = (id) => {
    const newPlanet = planet;
    newPlanet[id].select = !newPlanet[id].select;
    setPlanet(newPlanet);
  };
  return (
    <div className="App">
      <h1>Finding Falcone!</h1>
      <h2>Time Taken: {time}</h2>
      {loop.map((p, idx) => (
        <div key={idx}>
          <Select
            id={idx}
            planet={planet}
            time={time}
            handlehange={handlehange}
          />
        </div>
      ))}
    </div>
  );
}
