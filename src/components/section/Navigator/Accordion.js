import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import './Accordion.css';


function Navigator(source) {

  const [setActive, setActiveState] = useState("");

  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null)

  const ToggleAccordionHandler = () =>{

    setActiveState( setActive === "" ? "active" : "")
    setHeightState( setActive ==="" ? "0px" : `${content.current.scrollHeight}px`)

  }
  return (

    

      <Accordionsection>

      <Button>

        <button onClick={ToggleAccordionHandler}>{source.title}</button>

      </Button>

      <Accordioncontent ref={content} style={{ maxHeight: `${setHeight}`}}>

        {source.content}     

      </Accordioncontent>

      </Accordionsection>

   

  );
}

export default Navigator



const Accordioncontent = styled.div`

margin-left: 10%;
font-family: 'Didact Gothic', sans-serif;
font-size: 14px;
overflow: hidden;
transition: max-height 0.6s ease;
/* max-height: 100px; */

`;

const Accordionsection = styled.div``;

const Button = styled.div`

button {
  /* border: 1px solid red; */
  border: none; 
  width: 100%;
  padding-top: 5%;
  padding-bottom: 4.3%;
  text-align: left;
  background-color: transparent;
  font-family: 'Didact Gothic', sans-serif;
    ;

}
`;
