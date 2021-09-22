import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class ProductList extends Component {
  state = {
    categories: [],
  };

  render() {
    return (
      <div>
        <h2>{this.props.currentCategory}</h2>
        <h4>{this.props.info.title}</h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Products</th>
              <th>Notes</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
            <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product.id,product.productName)} color="info">Add</Button></td>
            </tr>
            ))}
            
          </tbody>
        </Table>
      </div>
    );
  }
}
