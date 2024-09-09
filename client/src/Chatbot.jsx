import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';

const Chatbot = () => {
    const chatbotUrl = "https://66120a5a6670f55e47c726f5--gleaming-dasik-cdd8f7.netlify.app/"; 
    const openChatbot = () => {
        window.open(chatbotUrl, "_blank");
    };

    return (
        <div style={styles.container}>
            <div style={styles.iconContainer}>
                <ChatIcon onClick={openChatbot} style={styles.icon} title="Chatbot" />
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
    },
    iconContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
    icon: {
        cursor: 'pointer',
        fontSize: '2.5rem', // Adjust icon size as needed
        color: '#1976d2', // Chatbot icon color
    },
};

export default Chatbot;
