import { ButtonStyledThemeType } from "shared";

export interface TableColumn {
    key: string;
    label: string;
  }
  
  export interface TableData {
    [key: string]: string | number;
  }
  
  export interface TableContainerProps {
    $variant?: ButtonStyledThemeType;
    $scrollable?: boolean;
  }

  export interface TableStyledInterface {
    $sticky?: boolean
    $variant?: ButtonStyledThemeType;
    $useRowCursorPointer?: boolean
  }

  export interface TableProps {
    $variant?: ButtonStyledThemeType;
    $columns: TableColumn[];
    $data: TableData[];
    $onRowClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, data: TableData, rowIndex: number) => void
  
  }
  