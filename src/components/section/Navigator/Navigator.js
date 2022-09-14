import * as React from 'react';
import Accordion  from './Accordion';
// import './Navigator.css';
import styled from 'styled-components';

function Navigator() {

  return (

    <Wrapper> 

    <Accordionwrapper> 

        <Accordion title="Employees" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>  
        <Accordion title="Company Structure" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>  
        <Accordion title="Leaves" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Subsidiaries" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Policies" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Payroll" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Remuneration" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Tax Management" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Transactions" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Setting" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="Export/Import" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/>
        <Accordion title="User Access" content={<><li>Hello</li> <li>Hello</li> <li>Hello</li></>}/> 

    </Accordionwrapper>

    </Wrapper>

  );

}

export default Navigator

const Wrapper = styled.div`

    background-color: #fff;
    width: 20%;
    padding-top: 2%;
    padding-left: 1%;
    box-shadow: 0 0  8px 2px rgba(0, 0, 0, 0.26);
    border-right: 1px solid #dee2e6;
    /* border: 1px solid red; */
`;

const Accordionwrapper = styled.div`

    /* border: 1px solid red; */
    overflow-y: scroll;
    margin-right: 1%;
    margin-bottom: 12%; 
    height: 90%;
    
    &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
`;

