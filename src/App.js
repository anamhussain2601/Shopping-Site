import React, { Component } from 'react';
import './App.css';
import Product from "./Components/Product";
import Filter from './Components/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Products: [],
      size: "",
      sort: "",
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
    console.log(e.target.value)
    this.setState({ sort: e.target.value });
    this.listProducts()
  }
  handleSizeChange = (e) => {
    console.log(e.target.value)
    this.setState({ size: e.target.value });
    this.listProducts()

  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "A") {
        state.Products.sort((a, b) =>
          state.sort === "lowToHigh"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.Products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "A") {
        return {
          filteredProducts: state.Products.filter(
            a => a.availableSizes.indexOf(state.size) >= 0
          )
        };
      }
      return { filteredProducts: state.Products };
    });
  };

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
