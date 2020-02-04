import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
flex-direction: row;
`;
const Image = styled.img`
width: 300px;
height: 250px;
border: solid 1px rgb(255,255,255);
`;

function PhotoList(props) {
  return (
    <Div>
      {props.remainingImages.map((image, i) => <Image src={image} id={i+1} onClick={(event) => props.click(event.target.id)}/>)}
    </Div>
  );
}

export default PhotoList;
