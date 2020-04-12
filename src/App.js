import React, { Component } from 'react';
import './App.css';
import Product from "./Components/Product";
import Filter from './Components/Filter';

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

  handleSortChange = (e) => {
    console.log('jhi')
  }
  handleSizeChange = (e) => {
    console.log('jhi')
  }

  render() {
    const { Products } = this.state
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>x Product found.</p>
          <Filter
            handleSortChange={this.handleSortChange}
            handleSizeChange={this.handleSizeChange}
          />
        </div>
        <hr />

        <div className="row">
          <div className="col-md-9" style={{ width: null }}>
            <Product Products={Products} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
