import { useRef, useEffect } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import UserList from './UserList'
import waves from 'nice-waves'

function Voting() {
  useEffect(()=>{
    waves({
      fills: ['rgba(73, 153, 147, 0.82)', 'rgba(57, 54, 109, 0.5)'],
      flowRate: 2,
      swayRate: 0.9,
      wavelength: 10,
      offset: 0.12
    }).mount()
  })

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <UserList></UserList>
        </Row>
      </Container>
      <div id="waves" className="fixed-top vh-100 vw-100 z-n1 m-0 p-0" style={{'maxWidth': 5000}}>
      </div>
    </div>
  )
}

export default Voting;
