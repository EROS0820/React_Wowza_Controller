import { withStyles } from '@material-ui/core';
import {Input} from '@material-ui/core';

const ShadowInput = withStyles(theme => ({
    root: {
        width: '100%',
        padding: '0.4vw',
        fontSize: '1.2vw',
        color: '#1A1A1A',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    }
}))(Input);

export default ShadowInput;