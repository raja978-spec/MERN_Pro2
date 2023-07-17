import './App.css';
import AppNavbar from './components/Navbar'
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
        </div>
  );
}

export default App;
