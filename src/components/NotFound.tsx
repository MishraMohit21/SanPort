import { Link } from 'react-router-dom';
import FuzzyText from './FuzzyText';

export function NotFound() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #022315 0%, #031422 100%)',
      color: '#fff',
      fontFamily: 'Outfit, sans-serif'
    }}>
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
        fontSize="clamp(5rem, 15vw, 15rem)"
        color="#00e5ff"
        fuzzRange={25}
      >
        404
      </FuzzyText>
      
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '10px 0 30px' }}>
        Page Not Found
      </h2>
      
      <p style={{ color: '#9ca3af', marginBottom: '40px', textAlign: 'center', padding: '0 20px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link to="/" style={{
        backgroundColor: '#e58a2d',
        color: '#fff',
        padding: '12px 30px',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 4px 15px rgba(229, 138, 45, 0.4)',
        transition: 'transform 0.2s'
      }}>
        Return Home
      </Link>
    </div>
  );
}
