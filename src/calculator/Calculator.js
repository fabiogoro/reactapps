import { Component } from 'react'
import { Display } from './Display'
import { History } from './History'
import { Buttons } from './Buttons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export class Calculator extends Component {
  constructor(){
    super()
    this.state = {
      firstValue: 0, 
      secondValue: undefined, 
      operation: undefined, 
      result: undefined, 
      history: [],
      binaryMode: false
    }
  }

  render() {
    return ( 
      <Row className="justify-content-md-center mt-2" display>
        <Card bg="secondary" text="light" className="w-50">
          <Card.Header>
            <Alert variant="light" className="mt-3">
              <Display firstValue={this.state.firstValue} secondValue={this.state.secondValue} operation={this.state.operation} result={this.state.result}></Display>
            </Alert>
          </Card.Header>
          <Card.Body>
            <Container fluid>
              <Row>
                <Col xl="5">
                  <Buttons 
                    binaryMode={this.state.binaryMode}
                    numberFunction={this.numberFunction.bind(this)}
                    operationFunction={this.operationFunction.bind(this)}
                    equalFunction={this.equalFunction.bind(this)}
                    clearFunction={this.clearFunction.bind(this)}
                    switchModeFunction={this.switchModeFunction.bind(this)}>
                  </Buttons>
                </Col>
                <Col xl="7"><Alert variant="secondary"><History history={this.state.history}/></Alert></Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Row>
    );
  }

  switchModeFunction(e){
    this.setState({
      ...this.state,
      firstValue: 0, 
      secondValue: undefined, 
      operation: undefined, 
      result: undefined, 
      binaryMode: !this.state.binaryMode
    })
  }

  clearFunction(e){
    this.setState({
      ...this.state,
      firstValue: 0, 
      secondValue: undefined, 
      operation: undefined, 
      result: undefined, 
    })
  }

  equalFunction(e){
    if(this.state.secondValue!=undefined){
      const result = this.calculate(this.state.binaryMode)
      console.log(result)
      this.setState({
        ...this.state,
        result: result,
        history: [...this.state.history, 
          `${this.state.firstValue} ${this.state.operation} ${this.state.secondValue} = ${result}`],
      })
    }
  }

  calculate(binaryMode){
    if(binaryMode){
      return eval(`0b${this.state.firstValue}${this.state.operation}0b${this.state.secondValue}`).toString(2)
    } else {
      return eval(`${this.state.firstValue}${this.state.operation}${this.state.secondValue}`)
    }
  }

  operationFunction(e){
    if(!this.state.secondValue){
      this.setState({
        ...this.state,
        operation: e.target.getAttribute("operation"),
        secondValue: 0
      })
    }
  }

  numberFunction(e){
    if(this.state.secondValue != undefined){
      this.setValue("secondValue", e.target.getAttribute("number"))
    } else {
      this.setValue("firstValue", e.target.getAttribute("number"))
    }
  }

  setValue(valueName, number){
    if(this.state[valueName]==0){
this.state[valueName] = parseInt(number)
    } else {
      this.state[valueName] += number
    }
    this.setState(this.state)
  }
}

