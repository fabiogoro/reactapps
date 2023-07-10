import { Component } from 'react'
import Container from 'react-bootstrap/Container';
import { NumberButton } from './NumberButton'
import { OperationButton } from './OperationButton'
import { EqualButton } from './EqualButton'
import { ClearButton } from './ClearButton'
import { SwitchButton } from './SwitchButton'
import Row from 'react-bootstrap/Row';

export class Buttons extends Component {
  render() {
    return <Container>
      <Row className="justify-content-md-center mb-2 ">
        <NumberButton onClick={this.props.numberFunction} number="1" />
        <NumberButton onClick={this.props.numberFunction} number="2" binaryMode={this.props.binaryMode} />
        <NumberButton onClick={this.props.numberFunction} number="3" binaryMode={this.props.binaryMode} />
        <OperationButton onClick={this.props.operationFunction} operation="+" />
      </Row>
      <Row className="justify-content-md-center mb-2">
        <NumberButton onClick={this.props.numberFunction} number="4" binaryMode={this.props.binaryMode} />
        <NumberButton onClick={this.props.numberFunction} number="5" binaryMode={this.props.binaryMode} />
        <NumberButton onClick={this.props.numberFunction} number="6" binaryMode={this.props.binaryMode} />
        <OperationButton onClick={this.props.operationFunction} operation="-" />
      </Row>
      <Row className="justify-content-md-center mb-2">
        <NumberButton onClick={this.props.numberFunction} number="7" binaryMode={this.props.binaryMode} />
        <NumberButton onClick={this.props.numberFunction} number="8" binaryMode={this.props.binaryMode} />
        <NumberButton onClick={this.props.numberFunction} number="9" binaryMode={this.props.binaryMode} />
        <OperationButton onClick={this.props.operationFunction} operation="*"  binaryMode={this.props.binaryMode} />
      </Row>
      <Row className="justify-content-md-center mb-2">
        <NumberButton onClick={this.props.numberFunction} number="0" />
        <EqualButton onClick={this.props.equalFunction}/>
        <OperationButton onClick={this.props.operationFunction} operation="/" binaryMode={this.props.binaryMode} />
      </Row>
      <Row className="justify-content-md-center mb-2">
        <ClearButton onClick={this.props.clearFunction}/>
      </Row>
      <Row className="justify-content-md-center mb-2">
        <SwitchButton onClick={this.props.switchModeFunction}/>
      </Row>
    </Container>
  }
}
