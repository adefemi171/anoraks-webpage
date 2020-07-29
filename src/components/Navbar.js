import React, { Fragment } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import RegisterIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'

import img from '../images/anoraksIcon.jpeg'

const styles = {
    register: {
        position: 'absolute',
        left: '90%'
    },
    img: {
        width: 35,
        height: 35,
        marginRight: 5,
        objectFit: 'cover'
    },
    anoraksLogo: {
        marginRight: 10
    }
}

const Navbar = (props) => {
    const { classes } = props
    return (
        <div>
            <AppBar>
                <Toolbar style={{position: 'relative'}}>
                    <Fragment>
                        <Fragment>
                            <div className={classes.anoraksLogo}>
                                <img className={classes.img} src={img} alt='logo' />
                            </div>
                            <div style={{ marginRight: 15, color: 'black' }}> ANORAKS </div>
                        </Fragment>
                        <Button>
                            Home
                        </Button>
                        <Button>
                            Event Stories
                        </Button>
                        <Button>
                            Sponsors
                        </Button>
                        <Button>
                            About
                        </Button>
                        <div className={classes.register}>
                            <Button>
                                REGISTER
                            </Button>
                            <span>
                                <IconButton>
                                        <RegisterIcon />
                                </IconButton>
                            </span>
                        </div>
                    </Fragment>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar)
