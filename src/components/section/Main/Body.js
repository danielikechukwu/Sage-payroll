import React from 'react'
import './Body.css'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table';
import {BiDotsVerticalRounded} from 'react-icons/bi'
// import './accordion.component.css'

const data = [

  { sn: "1", name: "Salary Structure 1", company_policy: 'Demo Company Policy', Description: "", payroll: 'Salary Group', status: "Status", action: "Action" },
  
  { sn: "2", name: "soft salary structure", company_policy: 'Soft Demo Policy', Description: "", payroll: 'Fringe and Benefit, Soft Deduction Group, Soft Earning Group', status: "Status", action: "Action" },
  
  { sn: "3", name: "Salary Structure", company_policy: 'Demo Company Policy', Description: "", payroll: 'Fringe and Benefit, Soft Deduction Group, Soft Earning Group', status: "Status", action: "Action" },
  
  { sn: "4", name: "Salary Structure", company_policy: 'Demo Company Policy', Description: "Salary Structure", payroll: 'Fringe and Benefit, Soft Deduction Group, Soft Earning Group', status: "Status", action: "Action" },
]

function Body() {
  return (
    <div className='content__Div'>

        <div> <h5>Enumerrate</h5> </div>

        <div  className='Body__container'>

          <Wrapper className='formBotton__style'>

          <form>

           <Input type="search" placeholder="Search..." />

          </form>

            <Button> + Add new</Button>

          </Wrapper>          

            {/* Table */}

            <Tablewrapper>         

            <Table striped="columns">
      <thead>
        <tr>

            <th>SN</th>
            <th>Name</th>
            <th>Company Policy</th>
            <th>Description</th>
            <th>Payroll Groups</th>
            <th>Status</th>
            <th>Actions</th>

        </tr>
      </thead>

      {data.map((val, key) => {
        return (
                    <tbody>

        <tr>

        <td>{val.sn}</td>
        <td>{val.name}</td>
        <td>{val.company_policy}</td>
        <td>{val.Description}</td>
        <td>{val.payroll}</td>
        <td><Button>Active</Button></td>
        <td><BiDotsVerticalRounded className='BiDotsVerticalRounded'/></td>
        
        </tr>

                    </tbody>

)
})}


    </Table>

            </Tablewrapper>

          </div>

        </div>
    
  )
}

export default Body


const Button = styled.button`

  background-color: rgb(235, 125, 125);
  border: none;    
  padding: 12px;
  color: white;
  cursor: pointer;
  font-size: 11px;
  font-family: 'Didact Gothic', sans-serif;

`;

const Input = styled.input`

  width: 170px;
  border: 1px solid #555;
  display: block;
  padding: 9px 4px 9px 40px;
  border-radius: 18px;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;


&:focus {
  border: 0;
}
`;


const Tablewrapper = styled.table`

padding: 7px;
margin-top: 3%;

Table > thead {
  
  font-family: 'Didact Gothic', sans-serif;
  font-size: 13px;
  background-color: rgb(244, 246, 248); 
  border-collapse: collapse; 
 
}

Table > tbody {
  
  font-family: 'Didact Gothic', sans-serif;
  font-size: 13px; 
  
  
   
}

Table > tbody > tr > td {

  /* padding: 10px; */
  border-bottom: 1px solid rgb(218, 211, 211);
  padding-bottom: 12px;
  padding-left: 14px;
  



}


Table > tbody > tr > td > Button {
  background-color: rgb(175, 197, 175);
  color: black;
  border: 2px solid rgb(55, 148, 55);
  border-radius: 5px;
  padding: 8px 17px 8px 10px;
  margin-top: 12px;
  margin-right: 12px;
}

Table > thead > tr > th {

padding: 10px;
align-items: flex-start;
text-align: left;
border-bottom: 1px thin gray; 
}

`;



const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;   

`;
