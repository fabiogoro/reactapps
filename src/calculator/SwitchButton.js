import { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class SwitchButton extends Component {
  render() {
    return <Col xl="12"><Button onClick={this.props.onClick} className="w-100">Switch bool/decimal</Button></Col>
  }
}
