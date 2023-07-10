import { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class ClearButton extends Component {
  render() {
    return <Col xl="12"><Button variant="danger" onClick={this.props.onClick} className="w-100">Clear</Button></Col>
  }
}
