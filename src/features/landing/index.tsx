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
    ></div>
  );
}
