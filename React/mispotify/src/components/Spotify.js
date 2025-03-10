import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Spotify = () => {
  const [resultado, setResultado] = useState([]);
  const [artista, setArtista] = useState("");
  const [cancion, setCancion] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleBuscar = async (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      alert("Por favor, completa ambos campos.");
      return;
    }

    setCargando(true);
    try {
      const respuesta = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
      const data = await respuesta.json();

      if (data.lyrics) {
        const newResultado = {
          artista,
          cancion,
          letra: data.lyrics,
        };

        setResultado([...resultado, newResultado]);
      } else {
        alert("No se encontraron letras para esta canción.");
      }
    } catch (error) {
      alert("Error al buscar la letra. Inténtalo de nuevo.");
    }
    setCargando(false);
    setArtista("");
    setCancion("");
  };

  return (
    <div className="container mt-4 spotify-container">
      <div className="row">
        <div className="col text-center">
          <h1 className="spotify-title">Spotify</h1>
        </div>
      </div>
  
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg p-4 spotify-card">
            <form onSubmit={handleBuscar}>
              <div className="mb-3">
                <label className="form-label spotify-label">Grupo/Artista</label>
                <input
                  type="text"
                  className="form-control spotify-input"
                  value={artista}
                  onChange={(e) => setArtista(e.target.value)}
                  placeholder="Ej: Quevedo"
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label spotify-label">Nombre de la Canción</label>
                <input
                  type="text"
                  className="form-control spotify-input"
                  value={cancion}
                  onChange={(e) => setCancion(e.target.value)}
                  placeholder="Ej: Columbia"
                />
              </div>
  
              <button type="submit" className="btn spotify-btn w-100" disabled={cargando}>
                {cargando ? "Buscando..." : "Buscar"}
              </button>
            </form>
          </div>
        </div>
      </div>
  
      <div className="row mt-5">
        <div className="col">
          <h3 className="spotify-results-title">Resultados</h3>
          <table className="table table-dark table-hover text-center align-middle spotify-table">
            <thead>
              <tr>
                <th>Grupo/Artista</th>
                <th>Canción</th>
                <th>Letra</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((result) => (
                <tr key={result.id}>
                  <td>{result.artista}</td>
                  <td>{result.cancion}</td>
                  <td>
                    <pre>{result.letra}</pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );  
};

export default Spotify;
