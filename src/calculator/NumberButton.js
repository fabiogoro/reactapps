import { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class NumberButton extends Component {
  render() {
    return <Col xl="3"><Button className="w-100" variant="outline-light" number={this.props.number} onClick={this.props.onClick} disabled={this.props.binaryMode}>{this.props.number}</Button></Col>
  }
}
