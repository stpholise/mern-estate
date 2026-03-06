import { FloatingWhatsApp } from 'react-floating-whatsapp'
const FloatingChat = () => {
  return (
    <FloatingWhatsApp 
      phoneNumber="07069309340"
      accountName="Olise Stephen"
      avatar="/abrss.png"
      statusMessage="Will Reply you as soon as possible"
      chatMessage="Hello! 👋 How can we help you today?"
      darkMode={false}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationSound={true}
    />
     
  );
};

export default FloatingChat;
