import { useState } from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function User({user: {name, votes, lastUpdated}, onClick, position}) {
  return (
    <Row>
      <Col xs="auto" className="mb-2">
        <Card>
        <Card.Body>
          <h2>{ name }</h2>
          <p>Votes: { votes }</p>
          <p><Button position={position} onClick={onClick}>+</Button></p>
          <p>Last Updated: { lastUpdated }</p>
        </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default User;
