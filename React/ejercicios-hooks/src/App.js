import Sumador from './components/Sumador';
import Semanal from './components/Semanal';
import Inputs from './components/Inputs';
import Factura from './components/Factura';
import Dado from './components/Dado';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h1>React Hooks</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <Sumador />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <Semanal />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <Inputs />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <Factura />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <Dado />
          </div>
        </div>
      </div>
    </div>
  );
}


