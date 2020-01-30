import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
width: 408px;
height: 408px;
border-right: solid 2px rgb(255,255,255);
border-bottom: solid 2px rgb(255,255,255);
border-left: solid 2px rgb(255,255,255);
display: flex;
`;


function LeadingPhoto(props) {
  return (
      <Img src={props.image} alt="I heart Garvi" />
  )
};

export default LeadingPhoto;