import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const LazyLoadFailure: React.FC = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' p={1}>
      <Typography
        sx={(theme) => ({
          marginTop: theme.spacing(1),
        })}
        variant='h5'
      >
        Something went wrong...
      </Typography>
      <Button
        sx={(theme) => ({
          marginTop: theme.spacing(1),
        })}
        color='secondary'
        variant='contained'
        onClick={() => window.location.reload()}
      >
        Reload Page
      </Button>
    </Box>
  );
};
