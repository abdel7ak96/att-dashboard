import {
  Box,
  Button,
  Container,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { Search as SearchIcon, Trash as TrashIcon } from '@assets/icons';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import theme from '@/providers/theme';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  {
    field: 'worker',
    headerName: 'Worker',
    editable: false,
    flex: 1,
  },
  {
    field: 'recordedBy',
    headerName: 'Recorded by',
    editable: true,
    flex: 1,
  },
  {
    field: 'startedAt',
    headerName: 'Started at',
    editable: true,
    flex: 1,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    sortable: true,
    flex: 1,
  },
  {
    field: 'completedAt',
    headerName: 'Completed at',
    sortable: true,
    flex: 1,
  },
  {
    field: 'id',
    headerName: '',
    flex: 1,
    type: 'actions',
    renderCell: () => (
      <Button variant="text" className="normal-case font-semibold">
        Details
      </Button>
    ),
  },
];

const ActivateSession = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('/api/active-sessions')
      .then((res) => res.json())
      .then((res) => setRows(res.sessions));
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography component="h1" className="text-xl">
        Sessions
      </Typography>
      <Box className="flex justify-between mt-10">
        <OutlinedInput
          size="small"
          placeholder="Search"
          margin="dense"
          className="text-gray-400 bg-white w-96 rounded-md"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          variant="outlined"
          className="text-textLight normal-case rounded-lg border-textLight gap-2"
        >
          <TrashIcon />
          <Typography>Delete</Typography>
        </Button>
      </Box>
      <Box className="mt-10">
        <DataGrid
          sx={{
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: theme.palette.secondary.light,
            },
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
};

export default ActivateSession;
