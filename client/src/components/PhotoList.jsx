import React, { Component } from 'react';

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {images: []};
  }
  render() {
    return (
      <div>
        {this.props.images.slice(1).map((image, key) => <img src={image} key={key}/>
        )}
      </div>
    );
  }
}

export default PhotoList;