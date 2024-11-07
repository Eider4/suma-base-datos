import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [primerNumero, setPrimerNumero] = useState(0);
  const [segundoNumero, setSegundoNumero] = useState(0);
  const [resultado, setResultado] = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [historial, setHistorial] = useState(null);

  const manejoEnvio = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (operacion == "suma") {
        res = parseFloat(primerNumero) + parseFloat(segundoNumero);
      }
      if (operacion == "resta") {
        res = parseFloat(primerNumero) - parseFloat(segundoNumero);
      }
      if (operacion == "multiplicacion") {
        res = parseFloat(primerNumero) * parseFloat(segundoNumero);
      }
      if (operacion == "divicion") {
        res = parseFloat(primerNumero) / parseFloat(segundoNumero);
      }
      setResultado(res);
      await fetch("http://localhost:3333/historial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          primerNumero,
          segundoNumero,
          resultado: res,
          operacion,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error, "error al publicar");
    }
  };
  const obtenerHistorial = async () => {
    try {
      await fetch("http://localhost:3333/historial")
        .then((res) => res.json())
        .then((res) => setHistorial(res.res));
    } catch (error) {
      console.log(error, "error al obtener");
    }
  };
  useEffect(() => {
    obtenerHistorial();
  }, [resultado]);

  console.log(historial);

  return (
    <div>
      <h1>Calculadora</h1>
      <form onSubmit={manejoEnvio}>
        <input
          type="number"
          required
          value={primerNumero}
          onChange={(e) => setPrimerNumero(e.target.value)}
          placeholder="numero 1"
        />
        <select onChange={(e) => setOperacion(e.target.value)}>
          <option value="suma">+ </option>
          <option value="resta"> -</option>
          <option value="multiplicacion">* </option>
          <option value="divicion"> /</option>
        </select>
        <input
          required
          type="number"
          value={segundoNumero}
          onChange={(e) => setSegundoNumero(e.target.value)}
          placeholder="numero 2"
        />
        <button type="submit">Sumar</button>
      </form>
      <p>resultado : {resultado}</p>
      <hr />
      {historial &&
        historial.map((historial) => (
          <div>
            <p>primer numero: {historial.primerNumero}</p>
            <p>segundo numero: {historial.segundoNumero}</p>
            <p>operacion: {historial.operacion}</p>
            <p>resultado: {historial.resultado}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default App;
