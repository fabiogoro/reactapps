import { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Number } from './Number'
import { Operator } from './Operator'
import Container from 'react-bootstrap/Container';

export class Display extends Component {
  render() {
    return <Container>
      <Row>
        <Number number={this.props.firstValue} />
        <Operator operator={this.props.operation} />
        <Number number={this.props.secondValue} />
        <Operator operator="=" />
        <Number number={this.props.result} />
      </Row>
    </Container>
  }
}
