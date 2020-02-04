import React from 'react';
import LeadingPhoto from './LeadingPhoto.jsx';
import PhotoList from './PhotoList.jsx';

function PhotoGallery(props) {
  return (
    <div>
        <LeadingPhoto image={props.images[0]} click={props.click}/>
        <PhotoList remainingImages={props.images.slice(1)} click={props.click} />
      </div>
  );
}

export default PhotoGallery;
