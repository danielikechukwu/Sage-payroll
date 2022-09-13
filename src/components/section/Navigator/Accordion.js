import * as React from 'react';
import styled from 'styled-components';


function Navigator() {
  return (

    <Accordionwrapper>

      <Accordionsection>

      <Button>
        <ButtonText></ButtonText>
      </Button>

      <Accordioncontent>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </Accordioncontent>

      </Accordionsection>

    </Accordionwrapper>

  );
}

export default Navigator

const Accordionwrapper = styled.div`
/* 
    background-color: #fff;
    width: 20%;
    padding-top: 4%;
    padding-left: 1%;
    border-right: 1px solid #dee2e6; */

`;

const Accordioncontent = styled.div``;

const Accordionsection = styled.div``;

const Button = styled.div``;

const ButtonText = styled.div``;