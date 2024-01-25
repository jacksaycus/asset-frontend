import { DataGrid, GridColDef, GridCellParams, GridToolbarContainer, GridToolbar,GridToolbarColumnsButton ,GridToolbarFilterButton,GridToolbarDensitySelector} from '@mui/x-data-grid'
export default function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }