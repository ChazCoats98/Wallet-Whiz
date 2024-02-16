import { createTheme } from "@mui/material/styles";

export const PageTheme = createTheme({
    typography: {
        fontFamily: ['kanit', 'oswald', 'sans-serif'],
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#7F2596',
                    marginTop: '20px',
                    '&:hover': {
                        backgroundColor: '#681e7a',
                    },
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                }
            },
        },
        MuiTextField: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#fff'
                },
                root: {
                    width: '100%',
                    fontFamily: 'kanit, sans-serif;',
                    '& .css-11b3ww9-MuiPaper-root-MuiAppBar-root': {
                        backgroundColor: '#404b9d'
                    },
                    '& .MuiInputBase-root': {
                        '& fieldset': {
                            borderColor: 'rgb(194, 184, 217)',
                        },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "rgb(139, 127, 166)"
                        }
                    },
                    '& .MuiInputBase-root:hover': {
                        '& fieldset': {
                            borderColor: 'rgb(139, 127, 166)',
                        }
                    },
                    '& .MuiFormLabel-root': {
                        color: '#000000',
                        fontFamily: 'Oswald, sans serif',
                        letterSpacing: '1.2px',
                    },
                    '& label.Mui-focused': {
                        color: '#afafaf',
                    },
                    '& div': {
                        color: '000000'
                    },
                },
            },
        },
    },
});
