export default function Select({ planet, time, handlehange, id }) {
  return (
    <div className="App">
      <select onChange={() => handlehange(id)}>
        {planet
          .filter((pl) => pl.select === false)
          .map((pl, idx) => (
            <option key={idx}>{pl.name}</option>
          ))}
      </select>
      <h2>Time Taken: {time}</h2>
    </div>
  );
}
