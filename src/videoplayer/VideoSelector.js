import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import VideoItem from './VideoItem'

function VideoSelector({clickHandler, videos}) {
  return (
    <Col md="5">
      <ListGroup>
        <ListGroup.Item active>Choose a Video</ListGroup.Item>
        {videos.map((v)=><VideoItem onClick={clickHandler} video={v}></VideoItem>)}
      </ListGroup>
    </Col>
  )
}

export default VideoSelector;
