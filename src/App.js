import { Component } from 'react'
import { Calculator } from './calculator/Calculator'
import Voting from './voting/Voting'
import VideoPlayer from './videoplayer/VideoPlayer'
import StudentForm from './studentForm/StudentForm'
import { Header } from './Header'
import Container from 'react-bootstrap/Container';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      openApp: 0
    }
  }

  render() {
    return ( 
      <main>
        <Header handler={this.handler.bind(this)}></Header>
        {this.state.openApp==0? <Container className="mt-5 w-50 text-center"><h2>Hi, please choose option above</h2></Container>:null}
        {this.state.openApp==1? <Calculator/>:null}
        {this.state.openApp==2? <Voting/>:null}
        {this.state.openApp==3? <VideoPlayer/>:null}
        {this.state.openApp==4? <StudentForm/>:null}
      </main>
    );
  }

  handler(e) {
    this.setState({openApp: e.target.getAttribute("page")})
  }
}

