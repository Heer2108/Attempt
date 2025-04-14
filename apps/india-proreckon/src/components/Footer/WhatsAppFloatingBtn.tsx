'use client';
// react
import React, { useRef } from 'react';
// others
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useClickOutside } from '@/utils/useClickOutside';


export default function WhatsAppFloating() {

  const ref = useRef(null);

  const { accountName, phoneNumber, avatar, statusMessage, chatMessage, placeholder } = {
    accountName: 'ProReckonSolutions India',
    phoneNumber: '919924443174',
    avatar: '/whatsapp-avatar.jpeg',
    statusMessage: 'Welcome to Proreckon Solutions India Online Support',
    chatMessage: 'Greetings! Please let us know what you are looking for',
    placeholder: 'How can we help you today?'
  };;

  const onClickOutside = () => {
    // Select the element by class name
    const element: any = document.querySelector('.styles-module_close__RLouK');
    // Fire the click event if the element exists
    if (element) {
      element.click();
    }
  };

  useClickOutside(ref, onClickOutside);
  return (
    <div ref={ref}>
      <FloatingWhatsApp
        accountName={accountName}
        phoneNumber={phoneNumber}
        avatar={avatar}
        statusMessage={statusMessage}
        chatMessage={chatMessage}
        placeholder={placeholder}
        allowEsc
      />
    </div>
  );
}
