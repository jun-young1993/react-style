import {StyledThemeInterface} from "./styled-theme.interface";
const styledTheme: StyledThemeInterface = {
    buttonDefault: 'primary',
    button: {
      primary: {
        border: 'none',
        backgroundColor: 'transparent',
        color: undefined,
        hoverBackgroundColor: 'transparent',
        disabledColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        hoverBorderColor: "#d3d3d3",
        hoverColor: "#d3d3d3",
        disabledBackgroundColor: ""
      },
    },
    buttonSizeDefault: 'small',
    buttonSize: {
      xs: {
        padding: '0.125rem 0.25rem',
        fontSize: '0.75rem', 
        height: '1.5rem',
        width: '1.5rem',
      },
      small: {
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        height: '2rem',
        width: '2rem',
      },
      medium: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        height: '3rem',
        width: '3rem',
      },
      large: {
        padding: '0.75rem 1.5rem',
        fontSize: '1.125rem',
        height: '4rem',
        width: '4rem',
      },
    },
    itemDefault: 'primary',
    item: {
      primary: {
        backgroundColor: 'transparent',
        color: '#007bff',
        borderColor: '#007bff',
        hoverBackgroundColor: undefined,
        disabledColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        hoverBorderColor: "",
        disabledBackgroundColor: ""
      },
    },
    tableDefault: 'primary',
    table: {
      primary: {
        wrap: {
          borderColor: '#dee2e6'
        },
        cell: {
          borderColor: '#dee2e6'
        },
        row: {
          hoverBackgroundColor: '#f1f3f5'
        },
        head: {
          backgroundColor: '#f8f9fa'
        },
        
      }
    }
  };
export default styledTheme;