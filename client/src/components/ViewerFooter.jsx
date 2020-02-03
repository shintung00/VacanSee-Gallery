import React, { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.div`
color: white;
position: absolute;
height: 5%;
width: 100%;
top: 95%;
text-align: center;
`;

function ViewerFooter(props) {
  return (
    <Foot>For Sale: {props.des}</Foot>
  );
}

export default ViewerFooter;
