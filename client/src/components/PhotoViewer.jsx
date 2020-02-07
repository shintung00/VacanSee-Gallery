import React from 'react';
import styled from 'styled-components';
import ViewerCenter from './ViewerCenter.jsx';
import ViewerHeader from './ViewerHeader.jsx';
import ViewerFooter from './ViewerFooter.jsx';

const Popout = styled.div`
background-color: rgba(0,0,0,0.85);
height: 100%;
width: 100%;
overflow-y: hidden;
overflow-x: hidden;
flex-direction: column;
display:flex;
position: absolute;
`;


function PhotoViewer(props) {
  return (
    <Popout>
      <ViewerHeader close={props.close} restart={props.restart} save={props.save} saved={props.saved}/>
      <ViewerCenter next={props.next} previous={props.prev} photo={props.photo} current={props.current + 1} total={props.total} close={props.close}/>
      <ViewerFooter des={props.description}/>
    </Popout>
  );
}

export default PhotoViewer;
