import React from 'react'
import { ThemeProvider, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}))
const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate(() => navigate.push('/'))

    const { currency, setCurrency } = CryptoState()
    console.log(currency)
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            className={classes.title}
                            onClick={() => navigate('/')}
                            variant='h6'
                        >Crypto Hunter</Typography>
                        <Select
                            defaultValue={'USD'}
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                                color: 'white'
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
