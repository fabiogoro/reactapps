import { Component } from 'react'
import Col from 'react-bootstrap/Col';

export class Operator extends Component {
  render() {
    return <Col xl="auto" className="fs-1 text">{this.props.operator}</Col>
  }
}
