import { withStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

const RedButton = withStyles(theme => ({
    root: {
        backgroundColor: '#F11818',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: '1.5vw',
        padding: '0.5vw 4vw'
    }
}))(Box);

export default RedButton;