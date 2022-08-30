import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navigator.css'


function Navigator() {
  return (
    <div className='container'>

{/* First Accordion */}

<Wrapperaccordion className='inner-border'>
      <Accordion>

        <AccordionSummary >

          <Typography className='Accordion__list'><h1>Employees</h1></Typography>

        </AccordionSummary>

        <AccordionDetails>

          <Typography>
              <li>Employee</li>
              <li>Company structure</li>
              <li>Leave</li>
              <li>Subsidiary</li>
          </Typography>

        </AccordionDetails>

      </Accordion>


{/* Second Accordion */}
      <Accordion>
        <AccordionSummary>
          <Typography className='Accordion__list'><h1>Company Structure</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>Employee</li>
        <li>Company structure</li>
        <li>Leave</li>
        <li>Subsidiary</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Third Accordion */}

      <Accordion>

        <AccordionSummary >

          <Typography className='Accordion__list'><h1>Leave</h1></Typography>

        </AccordionSummary>

        <AccordionDetails>

          <Typography>
              <li>Employee</li>
              <li>Company structure</li>
              <li>Leave</li>
              <li>Subsidiary</li>
          </Typography>

        </AccordionDetails>

      </Accordion>

      {/* Fourth Accordion */}

      <Accordion>

        <AccordionSummary >

          <Typography className='Accordion__list'><h1>Subsidiary</h1></Typography>

        </AccordionSummary>

        <AccordionDetails>

          <Typography>
              <li>Employee</li>
              <li>Company structure</li>
              <li>Leave</li>
              <li>Subsidiary</li>
          </Typography>

        </AccordionDetails>

      </Accordion>

      <Accordion>

<AccordionSummary >

  <Typography className='Accordion__list'><h1>Policies</h1></Typography>

</AccordionSummary>

<AccordionDetails>

  <Typography>
      <li>Employee</li>
      <li>Company structure</li>
      <li>Leave</li>
      <li>Subsidiary</li>
  </Typography>

</AccordionDetails>

</Accordion>


{/* Second Accordion */}
<Accordion>
<AccordionSummary>
  <Typography className='Accordion__list'><h1>Payroll</h1></Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
  <li>Employee</li>
<li>Company structure</li>
<li>Leave</li>
<li>Subsidiary</li>
  </Typography>
</AccordionDetails>
</Accordion>

{/* Third Accordion */}

<Accordion>

<AccordionSummary >

  <Typography className='Accordion__list'><h1>Remuneration</h1></Typography>

</AccordionSummary>

<AccordionDetails>

  <Typography>
      <li>Employee</li>
      <li>Company structure</li>
      <li>Leave</li>
      <li>Subsidiary</li>
  </Typography>

</AccordionDetails>

</Accordion>

{/* Fourth Accordion */}

<Accordion>

<AccordionSummary >

  <Typography className='Accordion__list'><h1>Tax Management</h1></Typography>

</AccordionSummary>

<AccordionDetails>

  <Typography >
      <li>Employee</li>
      <li>Company structure</li>
      <li>Leave</li>
      <li>Subsidiary</li>
  </Typography>

</AccordionDetails>

</Accordion>

      </Wrapperaccordion>

      

      </div>

  );
}

export default Navigator

const Wrapperaccordion = styled.div`
 overflow-y: scroll;
 margin-right: 8%;
 margin-bottom: 12%; 
 height: 500px;
 

`;