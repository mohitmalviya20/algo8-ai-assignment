import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React,{useState} from 'react'
import { useStateValue } from '../StateProvider';
import "./css/Admin.css"
import { Button, IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

function Admin() {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      const [{mobiles},dispatch]= useStateValue()
      const classes = useStyles();
      const handleClick= (id)=>{
          console.log(id)
          dispatch(
              {
                  type:"REMOVE_FROM_MOBILE",
                  id:id

              }
          )


      }
      const [phoneId, setPhoneId]=useState(0)
      const [name, setName]=useState("")
      const [desc,setDesc]=useState("")
      const [price, setPrice]=useState(0)
      const [img, setImg]=useState("")
      const submitPhone= (e)=>{
          e.preventDefault();
          dispatch({
              type:"SET_ITEMS",
              mobiles:{
                  id:phoneId,
                  name:name,
                  desc:desc,
                  price:price,
                  img:img
              }
          })

      }

    return (
        <div className="admin">
        <form>
            <input type="text" placeholder="Enter phone Id" value={phoneId} onChange={(e)=>setPhoneId(e.target.value)}/>
            <input type="text" placeholder="Enter phone Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter phone Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <input type="text" placeholder="Enter phone price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type="text" placeholder="Enter phone image url" value={img} onChange={(e)=>setImg(e.target.value)}/>
            <Button type="submit" onClick={submitPhone} className="button">Add New Phone</Button>
        </form>

    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name of Mobile</TableCell>
            <TableCell align="right">Mobile id</TableCell>
            <TableCell align="center">Description&nbsp;</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">image&nbsp;</TableCell>
            <TableCell align="right">delete&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mobiles.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.img}</TableCell>
              <TableCell align="right">
                <IconButton onClick={()=>handleClick(row.id)}>
                    <Cancel/>
                </IconButton>    
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            
        </div>
    )
}

export default Admin; 
 