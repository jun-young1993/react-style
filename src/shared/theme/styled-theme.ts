import {StyledThemeInterface} from "./styled-theme.interface";
const styledTheme: StyledThemeInterface = {
    buttonDefault: 'secondary',
    button: {
      primary: {
        border: 'none',
        backgroundColor: '#007bff',
        color: '#ffffff',
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        disabledBackgroundColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        disabledColor: "a0a0a0"
      },
      secondary: {
        border: 'none',
        backgroundColor: 'transparent',
        color: undefined,
        hoverBackgroundColor: 'transparent',
        disabledColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        hoverBorderColor: "#ffffff",
        hoverColor: "#ffffff",
        disabledBackgroundColor: ""
      },
      tertiary: {
        border: 'none',
        backgroundColor: 'transparent',
        color: '#007bff',
        hoverBackgroundColor: 'rgba(0, 123, 255, 0.1)',
        disabledColor: '#a0a0a0',
        hoverBorderColor: "",
        disabledBackgroundColor: ""
      },
    },
    buttonSizeDefault: 'small',
    buttonSize: {
      xs: {
        padding: '0.125rem 0.25rem',
        fontSize: '0.75rem', 
        height: '7px',
        width: '7px',
      },
      small: {
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        height: '14px',
        width: '14px',
      },
      medium: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        height: '24px',
        width: '24px',
      },
      large: {
        padding: '0.75rem 1.5rem',
        fontSize: '1.125rem',
        height: '48px',
        width: '48px',
      },
    },
    itemDefault: 'seconday',
    item: {
      primary: {
        backgroundColor: 'transparent',
        color: '#ffffff',
        borderColor: '#007bff',
        hoverBackgroundColor: undefined,
        hoverBorderColor: '#0056b3',
        disabledBackgroundColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        disabledColor: "a0a0a0"
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '#007bff',
        borderColor: '#007bff',
        hoverBackgroundColor: undefined,
        disabledColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        hoverBorderColor: "",
        disabledBackgroundColor: ""
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: '#007bff',
        hoverBackgroundColor: 'rgba(0, 123, 255, 0.1)',
        disabledColor: '#a0a0a0',
        borderColor: "",
        hoverBorderColor: "",
        disabledBackgroundColor: ""
      },
    },
  };
export default styledTheme;