import { withStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

const ShadowPan = withStyles(theme => ({
    root: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 8px 0 rgba(120, 120, 120, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))(Box);

export default ShadowPan;