import React, { Component } from 'react';
import axios from 'axios';
import LeadingPhoto from './LeadingPhoto.jsx';
import PhotoList from './PhotoList.jsx';


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
    return (
      <div>
        <h1>Xill0w</h1>
        <a>Leading Photo</a>
        <LeadingPhoto image={this.state.images[0]} />
        <a>Photo List</a>
        <PhotoList images={this.state.images}/>
      </div>
    )
  }
}

export default PhotoGallery;