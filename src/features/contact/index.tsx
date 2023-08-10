import { Grid } from '@mui/material';
import { Envelope } from './components/Envelope';

export default function ContactPage() {
  return (
    <Grid container justifyContent='center' sx={{ p: 4, pt: 24 }}>
      <Envelope />
    </Grid>
  );
}
