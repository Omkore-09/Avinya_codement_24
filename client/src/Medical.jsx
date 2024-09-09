import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const MedicalStore = () => {
    const medicalStoreUrl = "http://192.168.137.47:8501"; 
    const openMedicalStore = () => {
        window.open(medicalStoreUrl, "_blank");
    };

    return (
        <div style={styles.container}>
            <div style={styles.iconContainer}>
                <LocalHospitalIcon onClick={openMedicalStore} style={styles.icon} />
            </div>
        </div>
    );
};

const styles = {
  container: {
    position: 'fixed',
    top: '420px',
    right: 0,
    zIndex: 9999,
  },
  iconContainer: {
    position: 'sticky',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#1976d2',
    borderRadius: '50%',
    padding: '10px',
    marginRight: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '3rem', 
    color: 'rgba(255, 255, 255, 0.8)', 
  },
};

export default MedicalStore;
