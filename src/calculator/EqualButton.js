import { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class EqualButton extends Component {
  render() {
    return <Col xl="6"><Button variant="success" onClick={this.props.onClick} className="w-100">=</Button></Col>
  }
}
