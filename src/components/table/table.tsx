import styled from 'styled-components';
import { TableContainerProps, TableProps, TableStyledInterface } from './table.props';

const TableContainer = styled.div<TableContainerProps>`
  overflow-x: auto;
  overflow-y: ${({ $scrollable }) => ($scrollable ? 'auto' : 'hidden')};
  width: 100%;
  height: 100%;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
`;

const StyledTable = styled.table<TableStyledInterface>`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;

  thead {
    ${({ $sticky }) =>
      $sticky &&
      `
        position: sticky;
        top: 0;
        background-color: #f8f9fa;
        z-index: 1;
      `}
  }

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid #dee2e6;
  }

  tbody tr:hover {
    background-color: #f1f3f5;
  }
`;


const Table = ({ $columns, $data, $scrollable = false, $sticky = true }: TableProps & TableContainerProps & TableStyledInterface) => {
    return (
      <TableContainer
        $scrollable={$scrollable}
      >
        <StyledTable
            $sticky={$sticky}
        >
          <thead>
            <tr>
              {$columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {$data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {$columns.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    );
  };
  
  export default Table;
