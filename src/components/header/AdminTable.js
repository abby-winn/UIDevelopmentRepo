import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import SearchBar from './SearchBar';
import DeleteAdmin from './deleteAdmin';
import EditModal from './edit-modal';
import InactiveAdmin from './inactiveAdmin';
import RegisterAdmin from './registerAdmin';

function createData(name, username, email) {
  return { name, username, email };
}

const rows = [
  createData('Admin1', 'AdminUserName1', 'Admin1@gmail.com'),
  createData('Admin2', 'AdminUserName2', 'Admin1@gmail.com'),
  createData('Admin3', 'AdminUserName3', 'Admin1@gmail.com'),
  createData('Admin4', 'AdminUserName4', 'Admin1@gmail.com'),
  createData('Admin5', 'AdminUserName5', 'Admin1@gmail.com'),
];

export default function AdminTable() {
  return (
    <>
      <SearchBar
        sx={{
          align: 'left',
          marginLeft: '2%',
        }}
      />
      <TableContainer
        component={Paper}
        align="center"
        sx={{
          backgroundColor: '#3764A8',
          color: 'white',
          fontSize: 'large',
          width: '1000px',
          marginTop: '2%',
          marginLeft: '15%',
          marginRight: '15%',
        }}
      >
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: '#3764A8',
              color: 'white',
              fontSize: 'large',
            }}
          >
            <TableRow
              sx={{
                backgroundColor: '#3764A8',
                color: 'white',
                fontSize: 'large',
              }}
            >
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Name
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Username
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Email
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={
                  index % 2
                    ? { background: '#eeeeee' }
                    : { background: 'white' }
                }
              >
                <TableCell component="th" scope="row">
                  <Typography>
                    <EditModal /> {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <DeleteAdmin />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
