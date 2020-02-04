import React, { Component } from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery.jsx';
import PhotoViewer from './PhotoViewer.jsx';
import styled from 'styled-components';

const MasterDiv = styled.div`
height: 100%;
width: 100%;
`;

const GalleryContainer = styled.div`
display: flex;
height: 100%;
width: 620px;
left: 180px;
overflow: scroll;
flex-direction: column;
position: absolute;
cursor: pointer;
`;

const PhotoViewerContainer = styled.div`
position: absolute;
display: flex;
overflow: scroll;
width: 100%;
height: 100%;
flex-direction: column;
`;

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'],
      id: 0,
      address: '',
      description: '',
      popout: false,
      selectedPic: '',
      imageCount: 1,
      saved: false,
    };
    this.retrieveImages = this.retrieveImages.bind(this);
    this.togglePopout = this.togglePopout.bind(this);
    this.imageClick = this.imageClick.bind(this);
    this.closePopout = this.closePopout.bind(this);
    this.nextPic = this.nextPic.bind(this);
    this.prevPic = this.prevPic.bind(this);
    this.restartGallery = this.restartGallery.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.saveHouse = this.saveHouse.bind(this);
  }

  componentDidMount() {
    this.retrieveImages();
  }

  restartGallery() {
    this.setState({ selectedPic: 0 });
  }

  nextPic() {
    if (this.state.selectedPic + 1 === this.state.imageCount) {
      this.setState({ selectedPic: 0 });
    } else {
      this.setState({ selectedPic: parseInt(this.state.selectedPic) + 1 });
    }
  }

  prevPic() {
    if (this.state.selectedPic === 0) {
      this.setState({ selectedPic: parseInt(this.state.imageCount) - 1 });
    } else {
      this.setState({ selectedPic: parseInt(this.state.selectedPic) - 1 });
    }
  }

  togglePopout() {
    this.setState({ popout: true });
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  closePopout() {
    this.setState({ popout: false, selectedPic: '' });
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  saveHouse() {
    this.setState({ saved:!this.state.saved });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.nextPic();
    } else if (event.keyCode === 37) {
      this.prevPic();
    }
  }

  imageClick(number) {
    this.togglePopout();
    this.setState({ selectedPic: parseInt(number) });
  }

  retrieveImages() {
    axios.get('/houses')
      .then((response) => {
        const house = response.data[0];
        this.setState({
          images: house.images,
          description: house.description,
          id: house.id,
          address: house.address,
          imageCount: house.images.length,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <MasterDiv>
        <GalleryContainer>
          <PhotoGallery images={this.state.images} click={this.imageClick} />
        </GalleryContainer>
        {this.state.popout && (<PhotoViewerContainer>
          <PhotoViewer save={this.saveHouse} saved={this.state.saved} photo={this.state.images[this.state.selectedPic]} close={this.closePopout} next={this.nextPic} prev={this.prevPic} description={this.state.description} total={this.state.imageCount} current={this.state.selectedPic} restart={this.restartGallery}/>
          </PhotoViewerContainer>)}
      </MasterDiv>
    );
  }
}

export default MainContainer;
