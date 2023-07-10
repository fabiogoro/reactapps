import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoItem({video, onClick}) {
  return (
    <ListGroup.Item videoid={video.id} onClick={onClick} variant={video.isPlaying?"secondary":"light"}>
      <FontAwesomeIcon icon={video.isPlaying?faPlay:faPause}/>{" "}
      {video.name}
    </ListGroup.Item>
  )
}

export default VideoItem;
