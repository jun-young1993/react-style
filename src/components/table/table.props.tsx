export interface TableColumn {
    key: string;
    label: string;
  }
  
  export interface TableData {
    [key: string]: string | number;
  }
  
  export interface TableContainerProps {
    $scrollable?: boolean;
  }

  export interface TableStyledInterface {
    $sticky?: boolean
  }

  export interface TableProps {
    $columns: TableColumn[];
    $data: TableData[];
  
  }
  