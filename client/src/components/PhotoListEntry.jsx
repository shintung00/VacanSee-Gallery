import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 200px;
height: 200px;
border: solid 2px rgb(255,255,255);
flex-wrap: wrap;
display: flex;
`;

function PhotoListEntry(props) {
  return <Image src={props.src} onClick= {props.toggle} key={props.key}/>;
}

export default PhotoListEntry;