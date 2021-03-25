import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='h3'>
                        About
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='body1' align='center'>
                        Ryota Wabuchi<br />
                        Tokushima Univ.<br />
                        From Ehime<br />
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default About;