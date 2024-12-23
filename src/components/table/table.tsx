import styled from 'styled-components';
import { TableContainerProps, TableProps, TableStyledInterface } from './table.props';
import { useStyledTheme } from '../../shared';

const TableContainer = styled.div<TableContainerProps>`
  overflow-x: auto;
  overflow-y: ${({ $scrollable }) => ($scrollable ? 'auto' : 'hidden')};
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme}) => theme.table[theme.tableDefault].wrap.borderColor };
  border-radius: 0.5rem;
`;

const StyledTable = styled.table<TableStyledInterface>`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;

  thead {
    ${({ $sticky, theme }) =>
      $sticky &&
      `
        position: sticky;
        top: 0;
        background-color: ${theme.table[theme.tableDefault].head.backgroundColor};
        z-index: 1;
      `}
  }

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid ${({$variant, theme}) => theme.table[$variant || theme.tableDefault].cell.borderColor };
  }

  tbody tr:hover {
    cursor: ${({$useRowCursorPointer}) => $useRowCursorPointer && 'pointer'};
    background-color: ${({$variant, theme}) => theme.table[$variant || theme.tableDefault].row.hoverBackgroundColor };
  }
`;


const Table = ({ $columns, $data, $scrollable = false, $sticky = true, $onRowClick, $useRowCursorPointer }: TableProps & TableContainerProps & TableStyledInterface) => {
  const theme = useStyledTheme();
  
    return (
      <TableContainer
        theme={theme}
        $scrollable={$scrollable}
      >
        <StyledTable
            theme={theme}
            $sticky={$sticky}
            $useRowCursorPointer={$useRowCursorPointer || ($onRowClick ? true : false)}
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
              <tr key={rowIndex} onClick={(event) => $onRowClick && $onRowClick(event, row, rowIndex)}>
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
