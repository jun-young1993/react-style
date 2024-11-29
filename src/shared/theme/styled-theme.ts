import {StyledThemeInterface} from "./styled-theme.interface";
const styledTheme: StyledThemeInterface = {
    buttonDefault: 'secondary',
    button: {
      primary: {
        border: false,
        backgroundColor: '#007bff',
        color: '#ffffff',
        borderColor: '#007bff',
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        disabledBackgroundColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        disabledColor: "a0a0a0"
      },
      secondary: {
        border: 'none',
        backgroundColor: undefined,
        color: undefined,
        hoverBackgroundColor: '#f0f8ff',
        disabledColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        hoverBorderColor: "",
        disabledBackgroundColor: ""
      },
      tertiary: {
        border: undefined,
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
        height: '1.5rem',
        width: 'auto',
      },
      small: {
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        height: '2rem',
        width: 'auto',
      },
      medium: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        height: '2.5rem',
        width: 'auto',
      },
      large: {
        padding: '0.75rem 1.5rem',
        fontSize: '1.125rem',
        height: '3rem',
        width: 'auto',
      },
    },
    itemDefault: 'seconday',
    item: {
      primary: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        borderColor: '#007bff',
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        disabledBackgroundColor: '#a0a0a0',
        disabledBorderColor: '#a0a0a0',
        disabledColor: "a0a0a0"
      },
      secondary: {
        backgroundColor: '#ffffff',
        color: '#007bff',
        borderColor: '#007bff',
        hoverBackgroundColor: '#f0f8ff',
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