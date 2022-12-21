import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/Navbar';
import Pages from './Components/Pages';
import CardsList from './Components/CardsList';

function App () {
  return (
    <div className="App">
    <NavBar/>
    <Pages></Pages>
    <CardsList/>
</div>

  )
}


// class App extends React.Component{
//     constructor(){
//       super()
//       this.state = {
//         vcards : []
//       }
//     }

    
//     render(){
//     }


// }

export default App;
