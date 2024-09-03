import { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ childRef }) => {
  const player = useRef(null);


  useEffect(() => {
    player.current = new Plyr('#player', {});

    return () => {
      if (player.current) {
        player.current.destroy();
      }
    };

  }, []);

  return (
    <div className='max-w-4xl cursor-pointer' ref={childRef}>
      <video controls id="player" poster='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'>
        <source src='./video/View_From_A_Blue_Moon_Trailer-576p.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;