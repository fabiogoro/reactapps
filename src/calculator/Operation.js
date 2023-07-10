import { Component } from 'react'
import Row from 'react-bootstrap/Row';

export class Operation extends Component {
  render() {
    return <Row>{this.props.operation}</Row>
  }
}
