import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const GamingSection = () => {
    const gamingUrl = "  https://66120cffa087c7601ce84c57--gleaming-dasik-cdd8f7.netlify.app/"; 
    const openGamingSection = () => {
        window.open(gamingUrl, "_blank");
    };

    return (
        <div style={styles.container}>
            <div style={styles.iconContainer}>
                <SportsEsportsIcon onClick={openGamingSection} style={styles.icon} />
            </div>
        </div>
    );
};

const styles = {
  container: {
    position: 'fixed',
    top: '340px',
    right: 0,
    zIndex: 9999,
  },
  iconContainer: {
    position: 'sticky',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(72, 0, 95, 0.8)',   
    borderRadius: '50%',
    padding: '10px',
    marginRight: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '3rem', 
    color: '#ffffff',
    
  },
};

export default GamingSection;
