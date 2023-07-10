import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Input from './Input'
import { faUser, faInbox, faCity, faUniversity, faFaceSmile } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

function StudentForm() {
  const [inputs, setInputs] = useState({});

  function formSubmit(event){
    console.log(inputs)
    event.preventDefault()
    event.target.checkValidity()
    event.target.reset()
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setInputs({...inputs, [name]: value})
  }

  return (
    <Alert variant="success">
      <Container className="mt-4">
        <Row>
          <div className="text-center">
            <Alert.Heading>Student Details</Alert.Heading>
            <p>Hello Student! Please fill in your details</p>
          </div>
          <hr />
        </Row>
        <Form onSubmit={formSubmit}>
          <Row>
            <Col className="md-5">
              <Input 
                name="Username" 
                icon={faUser} 
                onChange={handleChange} 
                minlength="2" 
                required>
              </Input>
            </Col>
            <Col className="md-2"></Col>

            <Col className="md-5">
              <Input 
                name="Email" 
                type="email"
                icon={faInbox} 
                onChange={handleChange} 
                required>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input 
                type="textarea" 
                name="Address" 
                onChange={handleChange} 
                placeholder="Street, number, city, zip" 
                icon={faCity} 
                minlength="10" 
                required>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col className="md-5">
              <Input 
                name="Course" 
                icon={faUniversity} 
                options={['Node','React','Agriculture']}
                required>
              </Input>
            </Col>
            <Col className="md-2"></Col>

            <Col className="md-5">
              <Input 
                name="Gender" 
                icon={faFaceSmile} 
                type="radio" 
                options={['Female','Male','Other']}
                required>
              </Input>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Alert>
  )
}

export default StudentForm
