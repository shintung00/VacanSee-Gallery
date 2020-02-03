import React from 'react';
import LeadingPhoto from './LeadingPhoto.jsx';
import PhotoList from './PhotoList.jsx';

// const Div = styled.div`
// display: flex;
// border: solid 5px rgb(183, 10, 10);
// height: 800px;
// width: 420px;
// overflow-y: scroll;
// overflow-x: hidden;
// flex-direction: column;
// cursor: pointer;
// z-index: -1;
// `;


function PhotoGallery(props) {
  return (
    <div>
        <LeadingPhoto image={props.images[0]} click={props.click}/>
        <PhotoList remainingImages={props.images.slice(1)} click={props.click} />
      </div>
  );
}

export default PhotoGallery;
