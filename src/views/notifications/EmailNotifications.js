import React, {useEffect, useRef  } from 'react'
import { Layout, Menu, Input  } from 'antd';
import './PatientInfo.css';
import 'antd/dist/antd.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import 'react-toastify/dist/ReactToastify.css'; 
import { alpha} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import emailjs from '@emailjs/browser';
import {
    CBadge
  } from '@coreui/react'
//  import config from '../../config.js';
// var AWS = require('aws-sdk');

export default function EmailNotify() {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.common.white, 0.35),
          '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.5),
          },
          margin: '10px',
          float : 'right',
          boxShadow: '-4px 8px 20px 0px grey',
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '98%',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '100ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      
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
    
        const [data, setdata]=React.useState([]);
        const [collapsed, setcollapsed]=React.useState(false);
        const [searchTerm, setsearchTerm]=React.useState('');
        const [page, setpage]=React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
        const [ordPlaced, setordPlaced]=React.useState(5);
        const classes = useStyles();
        const form = useRef();
    
        const { Header, Sider, Content } = Layout;
        const { Search } = Input;


        useEffect(() => { 
          const res= fetch("https://emailnotifications-sh4iojyb3q-uc.a.run.app", {
            method: 'GET',
          }).then(resp => resp.json()
          ).then(resp=>{
              setdata(resp)
              console.log(data)  
          }).catch(error => {
              console.log(error)
              });
            
        },[])
    
        const handleChangePage = (event, newPage) => {
            setpage(newPage);
        };

        const handleChangeRowsPerPage = event => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setpage(0);
        };

        // const sendemail = (e, name, doctor, risk) => {
        //   // e.preventDefault();

        //   var params = {
        //     name: 'Care Service Admin',
        //     from_name: 'kekarekomal@gmail.com',
        //     message_html: 'Please Find out the attached file'
        //   };

          // var params = {
          //       Message: `Dear ${name}/${doctor}
          //                   As part of remote health monitoring, respiratory health vital indicators Oxygen Saturation(SpO2) level and Body Temperature of ${name} is continuously recorded.
          //                   As part of regular diagnostics awareness, oxygen levels and temperature is recorded in last 5 minutes duration.
          //                   Oxygen level-80
          //                   Temperature-100
          //                   Immediate consultation is setup with provider to rule out any cause of concerns & complications, for adjustments needed on dosage or treatment methods, to ensure overall health stability.
          //                   As preliminary, please take notice of below critical parameters for discussion with doctor.
          //                   A bluish tint to fingernails, lips and skin
          //                   Chest congestion
          //                   shortness of breath
          //                   persistent cough
          //                   Thanking You
          //                   Hospital Management `, 
          //       Subject: `Connect with ${doctor}`
          //     };

      
            //   emailjs.sendForm('service_yjt5xpr', 'template_jt5dkn9', '#myform', params, 'aeab5d53d5705aa81b1d9fdb5c13077f')
            //     .then(function(response) {
            //       console.log('SUCCESS!', response.status, response.text);
            //       alert('sent')
            //   }, function(error) {
            //       console.log('FAILED...', error);
            //       alert(error)
            //   });
            // };

        

        // const sendemail=(patient, doctor, risk)=>{
        //   // AWS.config.update({accessKeyId: config.snsemail.key ,secretAccessKey: config.snsemail.secret , region: config.snsemail.region});
        // // change it to GCP
        //   // var params = {
        //   //   Message: `Dear ${patient}/${doctor}
        //   //               As part of remote health monitoring, respiratory health vital indicators Oxygen Saturation(SpO2) level and Body Temperature of ${patient} is continuously recorded.
        //   //               As part of regular diagnostics awareness, oxygen levels and temperature is recorded in last 5 minutes duration.
        //   //               Oxygen level-80
        //   //               Temperature-100
        //   //               Immediate consultation is setup with provider to rule out any cause of concerns & complications, for adjustments needed on dosage or treatment methods, to ensure overall health stability.
        //   //               As preliminary, please take notice of below critical parameters for discussion with doctor.
        //   //               A bluish tint to fingernails, lips and skin
        //   //               Chest congestion
        //   //               shortness of breath
        //   //               persistent cough
        //   //               Thanking You
        //   //               Hospital Management `, 
        //   //   Subject: `Connect with ${doctor}`,
        //   //   TopicArn: config.snsemail.topic
        //   // };

        //   // var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

        //   // publishTextPromise.then(
        //   //   function(data) {
        //   //     // console.log("MessageID is " + data.MessageId);
        //   //     toast.success("Email sent successfully, Please check your inbox");
        //   //   }).catch(
        //   //     function(err) {
        //   //     console.error(err, err.stack);
        //   //   });

        // }

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm(
              "service_cojz94j",
              "template_dibq77p",
              form.current,
              "user_jhGso3EKVsW92UEEuze6z"
            )
            .then(
              (result) => {
                console.log(result.text);
                console.log("message sent");
              },
              (error) => {
                console.log(error.text);
              }
            );
        };

        const riskscore=(cluster_label)=>{
          if(cluster_label === 0)
          {
            return(
              <CBadge color="warning" className="mfs-auto">Low Risk</CBadge>
            )
          }
          else if(cluster_label === 2)
          {
            return(
              <CBadge color="danger" className="mfs-auto">High Risk</CBadge>
            )
          }
          else
          {
            return(
              <CBadge color="info" className="mfs-auto">Medium Risk</CBadge>
            )
          } 
        }

       

    return (
      <div>
        <p style={{fontSize:'22px', textAlign:'center'}}><strong>Risk Patient Details</strong></p>

          <Paper>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by Code..."
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
                onChange={(e)=>{setsearchTerm(e.target.value)}}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ padding: '0px' }}>
                {/* <TableCell align="center" style={{ fontWeight: 'bold', width: '400px' }}>Id</TableCell> */}
                {/* <TableCell style={{ fontWeight: 'bold'}}>Patient ID</TableCell> */}
                <TableCell style={{ fontWeight: 'bold'}}>Patient Name</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Patient/Guardian Email</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Practitioner Name</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Risk Score</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Email Notifications</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.filter(val=>{
                  if(searchTerm === "")
                  {
                    return val;
                  }
                  else if((val.Patient_id.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.Patient_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.Guardian_Email.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.Practitioner.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.Risk_Category.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                  ){
                     return val  
                  }
                })
                  .map((row, index) => {
                    return(
                      <>
                        <>
                        <form ref={form} onSubmit={sendEmail}>
                          <label>Name</label>
                          <input type="text" name="user_name" />
                          <label>Email</label>
                          <input type="email" name="user_email" />
                          <label>Message</label>
                          <textarea name="message" />
                          <input type="submit" value="Send" />
                        </form>
                      </>
                      <StyledTableRow>
                        {/* <StyledTableCell align="left">{row.Patient_id}</StyledTableCell> */}
                        <StyledTableCell align="left">{row.Patient_name}</StyledTableCell>
                        <StyledTableCell align="left">{row.Guardian_Email}</StyledTableCell>
                        <StyledTableCell align="left">{row.Practitioner}</StyledTableCell>
                        <StyledTableCell>{riskscore(row.Risk_Category)}</StyledTableCell>
                        <StyledTableCell key={index}> <button key={index} type="button" class="btn btn-primary" onClick={() => sendEmail(row.name, row.doctor, row.cluster_label)}>Send</button></StyledTableCell>
                      </StyledTableRow>
                      </>
                    )
                  }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                 }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
         {/* </Content> */}
         </div>
        // </Layout> 

     
    )
}
