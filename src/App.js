//import Demo from "./Components/Demo" ;
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return(
    <div>
      {/* <Demo/> */}
      
      <Navbar/>
      <Dashboard/>
      <Login/>
    </div>
  );
}

export default App;
