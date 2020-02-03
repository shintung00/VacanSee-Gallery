import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
width: 600px;
height: 500px;
border-right: solid 2px rgb(255,255,255);
border-bottom: solid 2px rgb(255,255,255);
border-left: solid 2px rgb(255,255,255);
display: flex;
`;


function LeadingPhoto(props) {
  return (
    <Img src={props.image} id={0} onClick={(event) => props.click(event.target.id)} alt="I heart Alex" />
  );
}

export default LeadingPhoto;