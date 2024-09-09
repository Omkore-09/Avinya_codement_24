import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Chat = () => {
    const whatsappChatUrl = "https://wa.me/9561652882"; 
    const openWhatsAppChat = () => {
        window.open(whatsappChatUrl, "_blank");
    };

    return (
        <div style={styles.container}>
            <div style={styles.iconContainer}>
                <WhatsAppIcon onClick={openWhatsAppChat} style={styles.icon} />
            </div>
        </div>
    );
};

const styles = {
  container: {
    position: 'fixed',
    top: '500px',
    right: 0,
    zIndex: 9999,
  },
  iconContainer: {
    position: 'sticky',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    padding: '10px',
    marginRight: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '3rem', // Adjust as needed
    color: 'rgba(255, 255, 255, 0.8)', // WhatsApp green color   
  },
};

export default Chat;
