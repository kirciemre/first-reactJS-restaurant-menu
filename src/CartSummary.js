import alertify from "alertifyjs";
import React, { Component } from "react";
import { Badge, Col, DropdownItem, Row } from "reactstrap";

export default class CartSummary extends Component {
  sendCart = (cart) => {
    alertify.confirm(
      "Ordering?",
      "This cart will be ordered, do you confrim that?",
      function () {
        window.location.reload();
        alertify.success("Ordered!");
      },
      function () {
        alertify.error("Order cancelled.");
      }
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.map((prod) => (
          <DropdownItem key={prod.id}>
            <Row>
              <Col xs="10">
                {prod.product.length > 15
                  ? prod.product.substring(0, 15) + "..."
                  : prod.product}
              </Col>
              <Col xs="2">
                <Badge color="danger">{prod.qty}</Badge>
              </Col>
            </Row>
          </DropdownItem>
        ))}
        {this.props.cart!=="" ? (
          <div>
            <DropdownItem divider />
            <DropdownItem>
              <p onClick={() => this.sendCart("test")}>Buy</p>
            </DropdownItem>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
