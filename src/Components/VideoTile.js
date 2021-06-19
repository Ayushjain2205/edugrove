import React from "react";

function VideoTile(props) {
  return (
    <div className='resource-tile'>
      <div className='resource-badge'>
        <i class='fab fa-youtube'></i>
      </div>
      <a href={props.link} target='blank'>
        <h3 className='resource-name'>{props.name}</h3>
      </a>
    </div>
  );
}

export default VideoTile;
