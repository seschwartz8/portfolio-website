import { Typography } from '@mui/material';
import landingPortrait from '../../assets/landingPortrait.jpeg';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${landingPortrait})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: '70% 0',
      }}
    >
      {/* <Typography variant='h2' fontWeight={800} sx={{ color: 'black' }}>
        Sasa Pettyjohn
      </Typography> */}
    </div>
  );
}
