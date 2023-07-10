import { Component } from 'react'
import Col from 'react-bootstrap/Col';

export class Number extends Component {
  render() {
    return <Col xl="auto" className="fs-1 text">{this.props.number}</Col>
  }
}
