import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Components/Product";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Products: []
    };
  }

  componentDidMount() {
    fetch("..public/db.json")
      .then(res => res.json())
      .catch(err =>
        fetch("db.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({ Products: data });
      });
  }

  render() {
    const { Products } = this.state
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />

        <div className="row">
          <div >
            <Product Products={Products} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
