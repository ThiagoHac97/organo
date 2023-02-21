import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Imoveis from './componentes/Imoveis/Imoveis';

function App() {
  const [imoveis, setImoveis] = useState([])
  const aoNovoImovel = (imovel) =>{
    console.log(imovel)
    setImoveis([...imoveis, imovel])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoImovel={imovel => aoNovoImovel(imovel)} />
      <Imoveis></Imoveis>
    </div>
  );
}

export default App;
