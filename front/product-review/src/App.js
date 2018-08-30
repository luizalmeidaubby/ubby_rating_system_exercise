import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import productRating from './productRating';

class App extends Component {
  state = {
    product : {},
    description: "",
    rating : 0
  };

  async componentDidMount() {
    this.setState({product : await productRating.methods.get().call()});
  }

  sendData = async (event) => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();
    await productRating.methods.addOrReplace(this.state.description).send({from : accounts[0]});
  }

  addReview = async (event) => {
    event.preventDefault();
    console.log(this.state.rating);
    if (!this.state.product) console.log("No product to review!");
    let accounts = await web3.eth.getAccounts();
    await productRating.methods.review(this.state.rating).send({from: accounts[0]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Product Rating</h1>
        </header>
        <p className="App-intro">
          <div>
            Product description: {this.state.product.description} {this.state.product.average/10}
          </div>
          <form onSubmit = {this.sendData}>
            Add or Replace a product:
            <input value = {this.state.description} onChange = {event => {this.setState({description: event.target.value})}}/>
            <button>Add Product</button>
          </form>
          <form onSubmit = {this.addReview}>
            Add a Review:
            <input value = {this.state.rating} onChange = {event => {this.setState({rating: event.target.value})}}/>
            <button>Review this product</button>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
