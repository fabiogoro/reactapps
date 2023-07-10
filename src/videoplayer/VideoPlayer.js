import { useRef, useEffect, useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import VideoSelector from './VideoSelector'

function VideoPlayer() {
  const videosJSON = { movies: [] }
  let [videos, setVideos] = useState(videosJSON.movies)
  const videoRef = useRef()
  useEffect(() => {
    videoRef.current?.load()
  }, [videos]);
  useEffect(() => {
    (async ()=>{
      const response = await fetch('/videos.json');
      const data = await response.json();
      setVideos(data.movies)
    })()
  }, []);
  function selectMovie(e){
    const newVideos = videos.map((e)=>{return {...e, isPlaying: false}})
    newVideos[e.target.getAttribute('videoid')-1].isPlaying = true
    setVideos(newVideos)
  }
  let active = videos.filter((v)=>v.isPlaying)[0]
  return (
    <Container fluid className="mt-5">
      <Row>
        <VideoSelector clickHandler={selectMovie} videos={videos}/>
        <Col>
          {active?(
            <div>
              <marquee behavior="alternate">
                <Badge pill>
                  {active?.name}
                </Badge>
              </marquee>
              <video ref={videoRef} controls>
                <source src={active?.file} type="video/mp4" />
              </video>
            </div>
            ):<p>select a video on the left</p>}
        </Col>
      </Row>
    </Container>
  )
}

export default VideoPlayer;
