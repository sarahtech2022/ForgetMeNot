import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";

import ListLoves from "./components/ListLoves";

function App() {
  return (
    <div className="App">
      <MyNavBar></MyNavBar>
      <ListLoves />
    </div>
  );
}

export default App;
