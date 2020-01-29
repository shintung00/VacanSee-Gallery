import React, { Component } from 'react';
import axios from 'axios';
// import PhotoList from './PhotoList.jsx';
import LeadingPhoto from './LeadingPhoto.jsx';


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
        console.log("house is ", house);
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
    return <LeadingPhoto images={this.state.images} />
  }
}

export default PhotoGallery;