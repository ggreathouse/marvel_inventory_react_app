import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { SuperheroForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Superhero',
    width: 160,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    minWidth: 120,
    editable: true,
  },
  {
    field: 'comics_appeared_in',
    headerName: 'Comic Appearences',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'super_power',
    headerName: 'Super Power',
    width: 100,
    editable: true,
  },
  {
    field: 'preferred_weapon',
    headerName: 'Weapon',
    width: 100,
    editable: true,
  },
];

interface gridData{
    data:{
        id?:string;
    }
}

export const DataTable = () => {
    let { superheroData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] =useState<GridSelectionModel>([])

    let handleOpen = () =>{
        setOpen(true);
    }
    let handleClose = () =>{
        setOpen(false);
    }

    let deleteData = async () =>{
        await serverCalls.delete(`${gridData[0]}`)
        getData();
    }

    console.log(gridData)
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Superheroes In Inventory</h2>
        <DataGrid
          rows={superheroData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={newSelectModel => setData(newSelectModel)}
          {...superheroData}
        />
        <Button onClick={handleOpen} color='primary'>Update</Button>
        <Button onClick={deleteData} color='warning'>Delete</Button>
        {/* Dialog Popup */}
        <Dialog open={open} onClose={handleClose} aria-labelby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Update A Superhero</DialogTitle>
            <DialogContent>
                <DialogContentText>Updating Superhero ID: {gridData[0]}</DialogContentText>
                <SuperheroForm id={`${gridData[0]}`} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }