import React from 'react';
import styled from 'styled-components';

const CenterPic = styled.div`
width:80%;
left:10%; 
height:95%; 
background: center center no-repeat;
position: absolute;
text-align: center;
`;

const ActualImage = styled.img`
background-image:${props => props.src};
background: center center;
max-width:100%;
max-height:100%;
position: relative;
z-index: 4
`;

// max-height: 90%;
// min-height: 90%
// max-width: 80%;
// min-width: 80%
// top: 50%;
// left: 25%;
// position: absolute;
// text-align: center;

const Next = styled.button`
color: white;
background-color: rgba(0,0,0,0);
text-align: center;
border: 1px solid grey;
text-align: center;
font-size: 40px;
padding-top:1.5%;
padding-bottom:2%;
cursor: pointer;
display: inline-block;
position: absolute;
z-index: 4;
top:42%; 
left: 96%;
&:hover {
  color: rgb(98,174,247);
  border: 1px solid white;
  background-color: rgba(255,255,255,0.1)
}
`;

const Previous = styled.button`
color: white;
background-color: rgba(0,0,0,0);
text-align: center;
border: 1px solid grey;
text-align: center;
font-size: 40px;
cursor: pointer;
z-index: 4;
position: absolute;
top:42%; 
padding-top:1.5%;
padding-bottom:2%;
left: 1%;
display: inline-block;
&:hover {
  color: rgb(98,174,247);
  border: 1px solid white;
  background-color: rgba(255,255,255,0.1)
`;

const CenterContainer = styled.div`
position: absolute;
width: 100%;
height: 85%;
top: 10%;
z-index: 2;
`;

const PageTracker = styled.div`
color: white;
background-color: rgba(0,0,0,0.5);
padding: 4px 4px;
position: absolute;
z-index: 4;
top: 2%;
left: 75%;
`;

const Exitcontainer = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 1;
`;


function ViewerCenter(props) {
  return (
  <CenterContainer>
    <Previous onClick={props.previous}>{'<'}</Previous>
    <Next onClick={props.next}>{'>'}</Next>
    <CenterPic>
      <ActualImage src={props.photo} onClick={props.next} />
      <PageTracker>{props.current} of {props.total}</PageTracker>
    </CenterPic>
    <Exitcontainer onClick={props.close}/>
  </CenterContainer>
  );
}

export default ViewerCenter;
