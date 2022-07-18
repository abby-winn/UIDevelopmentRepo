/* eslint-disable prettier/prettier */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function title(){

    const boxStyle = {
        width: '100%',
        backgroundColor: '#3764A8',
        mt: '20px',
    };

    const headingText = {
        fontSize: '50px',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <Box
        sx={boxStyle}>
            <Typography align="center" sx={headingText}>ADMINISTRATORS</Typography>
        </Box>
    );
}