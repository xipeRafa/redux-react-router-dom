import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';


function App() {
  return (
    <div className="App">
       <Router>
      <Header />
      <div>
      <Switch>
                  <Route exact path="/" component={Productos} />
                  <Route exact path="/productos/nuevo" component={NuevoProducto} />
                  <Route exact path="/productos/editar/:id" component={EditarProducto} />
      </Switch>
      </div>
      </Router>
    </div>
  )
}

export default App
