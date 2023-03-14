import './App.css';
import logo from './imagenes/logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);

  const manejarClic = () => {
    console.log('Clic');
    setnumClics(numClics + 1);
  };
  const reiniciarContador = () =>{
    console.log('Reiniciando');
    setnumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logo}
          alt='Logo del contador'
        />  
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
