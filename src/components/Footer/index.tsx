import { Box, Link } from '@mui/material';
import { zIndexMap } from '../../utils';

export function Footer() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      sx={(theme) => ({
        position: 'sticky',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'green',
        padding: theme.spacing(2),
        zIndex: zIndexMap.appFooter,
      })}
    >
      <Box sx={{ color: 'white' }}>
        Created by{' '}
        <Link
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/seschwartz8'
        >
          Sasa Schwartz
        </Link>
      </Box>
      <Box sx={{ color: 'white' }}>&copy; August 2023</Box>
    </Box>
  );
}
