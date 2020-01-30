import React, { Component } from 'react';
import axios from 'axios';
import LeadingPhoto from './LeadingPhoto.jsx';
import PhotoList from './PhotoList.jsx';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
border: solid 5px rgb(183, 10, 10);
height: 800px;
width: 420px;
overflow-y: scroll;
overflow-x: hidden;
flex-direction: column;
cursor: pointer;
`

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["https://xillow.s3-us-west-1.amazonaws.com/house/image24.jpg"],
      id: 0,
      address: '',
      description: ''    
    };
    this.retrieveImages = this.retrieveImages.bind(this);
  }

  componentDidMount() {
    this.retrieveImages();
  }

  retrieveImages() {
    axios.get('/houses')
      .then((response) => {
        let house = response.data[0];
        this.setState({
          images: house.images,
          description: house.description,
          id: house.id,
          address: house.address
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <Div>
        <LeadingPhoto image={this.state.images[0]} />
        <PhotoList images={this.state.images}/>
      </Div>
    )
  }
}

export default PhotoGallery;