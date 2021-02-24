import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LastRecipes from './Components/LastRecipes/LastRecipes';
import Menu from './Components/Menu/Menu';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-wraper">
      <Header />
      <Menu />
      <div className="main-wraper">
        <div className="content-wraper">
          <LastRecipes />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
