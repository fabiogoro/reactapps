import { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class OperationButton extends Component {
  render() {
    return <Col xl="3"><Button className="w-100" variant="outline-light" onClick={this.props.onClick} operation={this.props.operation} disabled={this.props.binaryMode}>{this.props.operation}</Button></Col>
  }
}
