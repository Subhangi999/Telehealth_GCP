import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';
import { TableOutlined, UserOutlined, AreaChartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Input from '@material-ui/core/Input';
import { Link } from "react-router-dom";
import { Dropdown, message } from 'antd';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import VideocamIcon from '@material-ui/icons/Videocam';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Row from './Row';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import InputBase from '@material-ui/core/InputBase';
import { alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
export default function PatientInform() {
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
      float: 'right',
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
  const [data, setdata] = React.useState([]);
  const [collapsed, setcollapsed] = React.useState(false);
  const [searchTerm, setsearchTerm] = React.useState('');
  const [page, setpage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [ordPlaced, setordPlaced] = React.useState(5);
  const classes = useStyles();
  const [visits, setvisits] = React.useState([]);
  const sendVisitsBack = (visitsRet) => {
    setvisits(visitsRet);
  }
  const { Header, Sider, Content } = Layout;
  const { Search } = Input;
  const fetchpatientdata = () => {
    console.log("check function")
    var requestOptions = {
      method: 'GET'
    };
    fetch("https://patientdata-sh4iojyb3q-uc.a.run.app", requestOptions)
      .then((resp) => resp.json())
      .then((response) => {
        setdata(response)
        console.log(data)
        // console.log( eval(JSON.stringify(data)));
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    console.log("hello useeffect")
    // this.setState({isLoading:true})
    // const response= fetch('https://tthvndwmkh.execute-api.us-east-1.amazonaws.com/rpm-api?bucket=rpm-aws-synthea&key=patientrecords.json', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'Access-Control-Allow-Methods': 'GET',
    //             // 'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    //             // 'Access-Control-Allow-Origin' : '*'
    //         },
    //     }).then((data) => data.json()).then((resp) => {
    //   setdata(resp)
    //   console.log(data)
    // })
    fetchpatientdata();
  })
  console.log(data)
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item icon={<UserOutlined />}>
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  );
  function handleMenuClick(e) {
    message.info('Logout Successful');
  }
  const handleChangePage = (event, newPage) => {
    setpage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setpage(0);
  };
  function toggle() {
    setcollapsed(!collapsed)
  };
  return (
    <>
      {/* <Sider width={230} trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<DashboardIcon style={{fontSize:'24px'}}/> } >
            <Link to="/dashboard">Dashboard </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TableOutlined style={{fontSize:'24px'}}/>}>
              <Link to="/patientinfo">Patients</Link>
             </Menu.Item>
            <Menu.Item key="3" icon={<TableOutlined  style={{fontSize:'24px'}}/>}>
              <Link to="/providerinfo">Providers</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<AreaChartOutlined style={{fontSize:'24px'}}/>}>
              <Link to ="/insights">Care Insights</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<DevicesOtherIcon style={{fontSize:'24px'}}/>}>
              <Link to="/device">Device Management</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<VideocamIcon style={{fontSize:'24px'}}/>}>
            <Link to ="/consultation">Video Consultation</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<AssessmentRoundedIcon style={{fontSize:'24px'}}/>}>
             <Link to="/reports">Reports</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<AirportShuttleIcon style={{fontSize:'24px'}}/>}>
              <Link to ="/ambulanceservices">Ambulance Services</Link>
            </Menu.Item>
          </Menu>
        </Sider> */}
      {/* <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{float:"left", marginLeft:"5px", fontWeight:"bolder"}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
            </div>
             <p style={{fontSize:'26px', color:"#1890ff",  marginLeft:"200px"}}>Remote Patient Monitoring
             <div style={{float:"right",margin:"8px"}}>
              <Dropdown overlay={menu} >
                <a className="ant-dropdown-link" >
                <Avatar src="/broken-image.jpg" className={classes.large} style={{backgroundColor: '#1890ff'}}/>
                </a>
              </Dropdown>
            </div>
            <h6 style={{fontSize:"16px", color:"black", float:"right", marginRight:"5px"}}>Welcome Steve</h6>
            <span style={{float: "right", display: "inline-block", margin: "20px -120px", fontSize: "16px"}}>Care Services Admin</span>
            </p>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 500,
            }}
          > */}
      <p style={{ fontSize: '22px', textAlign: 'center' }}><strong>Patient Engagement</strong></p>
      <Paper>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search by Name..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(e) => { setsearchTerm(e.target.value) }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow style={{ padding: '0px' }}>
                <TableCell />
                {/* <TableCell align="center" style={{ fontWeight: 'bold'}}>Id</TableCell> */}
                <TableCell style={{ fontWeight: 'bold', width: '20%' }}>Name</TableCell>
                <TableCell style={{ fontWeight: 'bold', width: '26%' }}>Address</TableCell>
                <TableCell style={{ fontWeight: 'bold', width: '10%' }}>Age</TableCell>
                <TableCell style={{ fontWeight: 'bold', width: '16%' }}>Contact No</TableCell>
                <TableCell style={{ fontWeight: 'bold', width: '14%' }}>Remote Care</TableCell>
                <TableCell style={{ fontWeight: 'bold', width: '14%' }}>Consent Form</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <>
                {data.filter(val => {
                  if (searchTerm === "") {
                    return val;
                  }
                  else if ((val.Full_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (val.Patient_Address.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (val.Patient_Age.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (val.Contact_number.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (val.RemoteCareText.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (val.ConsentFormText.toLowerCase().includes(searchTerm.toLowerCase()))
                    // (val.item.Provider_name.toString().toLowerCase().includes(searchTerm.toLowerCase()))||
                    // (val.item.Practitioner_name.toString().toLowerCase().includes(searchTerm.toLowerCase()))||
                    // (val.item.Reason_name.toString().toLowerCase().includes(searchTerm.toLowerCase()))||
                    // (val.item.Encounter_start.toString().toLowerCase().includes(searchTerm.toLowerCase()))||
                    // (val.item.item.Encounter_end.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                  ) {
                    return val
                  }
                }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <Row key={row.name} row={row} sendVisitsBack={sendVisitsBack}/>
                    );
                  })}
              </>
              {console.log("Visits in Patient.js:", visits)}
              <>
              {visits.filter(val => {
                if (searchTerm === "") {
                  return val;
                } else if ((val.Provider_name.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
                (val.Practitioner_name.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
                (val.Reason_name.toString().toLowerCase().includes(searchTerm.toLowerCase())) 
                ) {
                  return val;
                }
              }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <Row row={row} sendVisitsBack={sendVisitsBack}/>
                  );
                })}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={ordPlaced}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      {/*  </Content> */}
    </>
    // </Layout>
  )
}