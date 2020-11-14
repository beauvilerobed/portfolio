import React from 'react';
 
function ThumbnailImage(props) {
  return (
    <div>
        <img scr={props.icon} alt="" 
           style={{width: 100, height: 100}}/>
    </div>
  )
}
 
export default ThumbnailImage;