import * as React from 'react';
import { DataGrid, useGridSlotComponentProps,GridPagination,useGridApiContext,useGridSelector,gridPageCountSelector } from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';


export default function CustomPagination(props: any) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
  }
  
  function Pagination({
    page,
    onPageChange,
    className,
  }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event as any, newPage - 1);
        }}
      />
    // <Pagination 
    //           count={10} 
    //           page={page + 1}
    //           variant="outlined" 
    //           color="primary" 
    //           onChange={(event, newPage) => {
    //                  onPageChange(event as any, newPage - 1);
    //           }}
    //        />
    );
  }
// export default function CustomPaginationGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         pagination
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         components={{
//           Pagination: CustomPagination,
//         }}
//         {...data}
//       />
//     </div>
//   );
// }