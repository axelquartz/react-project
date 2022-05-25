// import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import data from './data'
import React, { Component } from 'react'



// function App() {
//   let infoCard = data.map(item => {
//     return <Card
//     name = {item.name}
//     lastName = {item.lastName}
//     description = {item.description}
//     img = {item.imgURL}
//   />
//   })
//   return (
//     <div>
//       <h1>BetaCoins</h1>
//       <div className="card--list">
//           {infoCard}
//       </div>
//     </div>

//   );
// }


const infoCard = data.map(item => {
  return <Card
  name = {item.name}
  lastName = {item.lastName}
  description = {item.description}
  img = {item.imgURL}
/>}
);

// const testName = 'axel'

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
  }
    countUp() {
      this.setState({
        count: this.state.count + 1,
      })
    }
  render() {
    return(
    <div>
      <h1>BetaUltraCoinssxa</h1>
      <div className="card--list">
        {infoCard}
      </div>
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.countUp}>Count Up</button>
      </div>
    </div>
    )
  }
}

export default App;
