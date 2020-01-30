import React, { Component } from 'react';
import PhotoListEntry from './PhotoListEntry.jsx';
import styled from 'styled-components';


const Div = styled.div`
display: flex;
width: 420px;
flex-direction: row;
flex-wrap: wrap;

`;

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {images: []};
  }
  render() {
    return (
      <Div>
        {this.props.images.slice(1).map((image, key) => <PhotoListEntry src={image} id={key}/>
        )}
      </Div>
    );
  }
}

export default PhotoList;