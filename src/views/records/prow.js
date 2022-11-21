import React , {useEffect} from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { BsFillPersonFill } from "react-icons/bs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { useState } from 'react';
export default function Prow(props) {
  const StyledTableCell = withStyles((theme) => ({
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
    const { prow } = props;
    console.log(prow);
    const [open, setopen] = React.useState(false);
    const [Practdetails, setPractdetails] = React.useState([]);
    var url;
    // const redirectToProviderDetails = (e, Provider_code) => {
    //   url = `/records/patientdetails?Provider_code=${Provider_code}`;
    //   history.push(`${url}`);
    // }
    // const fetchPractdetailsdata = () => {
    //   console.log("check function")
    //   var requestOptions = {
    //     method: 'GET'
    // };
    //   fetch("https://fetchproviderdata21-sh4iojyb3q-uc.a.run.app", requestOptions)
    //   .then((resp) => resp.json())
    //   .then((response) => {
    //     setPractdetails(response)
    //     console.log(Practdetails)
    //   })
    //   .catch(error => console.log('error', error));
    // }
    // useEffect(() => { 
    //   fetchPractdetailsdata();
    // })
    // const Practdetails_new = Practdetails.filter(function(item) {
    //   if (item.Provider_code == prow.Provider_code){
    //     return item
    //   }
    // })
    return (
      <React.Fragment>
      {/* <Row row={data}/> */}
       <TableRow>
        <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={() => setopen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <StyledTableCell align="left">{prow.Provider_code}</StyledTableCell>
      <StyledTableCell align="left" >{prow.Provider_name}</StyledTableCell>
      <StyledTableCell align="left">{prow.Provider_Address}</StyledTableCell>
      <StyledTableCell align="left" style={{width:'150px'}}>{prow.Provider_number}</StyledTableCell>
    </TableRow>
    <StyledTableRow>
      <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            {/* <Typography variant="h6" gutterBottom component="div" style={{fontSize:"20px", color:"#1890ff"}}>
              Patient Practdetails
            </Typography> */}
            <Table size="small" aria-label="provider">
              <TableHead style={{ fontWeight: 'bold', color:"blue"}}>Practitioner Details:  </TableHead>
              <TableBody>
                <TableRow>
                   {/* <TableCell component="th" scope="row">{item.id}</TableCell> */}
                  <TableCell style={{ fontWeight: 'bold', width:"30%"}}>Practitioner Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold', width:"30%"}}>Specialisation</TableCell>
                  <TableCell style={{ fontWeight: 'bold', width:"40%"}}>Email ID</TableCell>
                </TableRow>
                  {/* {Practdetails_new.length > 0 && Practdetails_new.map((item) =>
                  { */}
                   <StyledTableRow key={prow.Practitioner_name}>
                   <StyledTableCell style={{width:"35%"}}>{prow.Practitioner_name}</StyledTableCell>
                   <StyledTableCell style={{width:"25%"}}>{prow.Specialization}</StyledTableCell>
                   <StyledTableCell style={{width:"20%"}}>{prow.Practitioner_Email}</StyledTableCell>
                   </StyledTableRow>
                  {/* })
                 } */}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </StyledTableCell>
    </StyledTableRow>
  </React.Fragment>
    );
  }