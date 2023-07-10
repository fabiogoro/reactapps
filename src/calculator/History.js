import { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Operation } from './Operation'

export class History extends Component {
  render() {
    return <Container fluid>
      <Row>History:</Row>
      {this.props.history.map((h,i)=><Operation key={i} operation={h}/>)}
    </Container>
  }
}
