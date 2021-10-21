import React from "react";
import { addResponseMessage, addUserMessage, setQuickButtons, toggleMsgLoader, Widget } from "./index";
import { Meta } from '@storybook/react';
import { addResponseMessageWithSender } from "./store/dispatcher";


export default {
    component: Widget,
    title: "Chat Widget"
} as Meta;

const handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
        toggleMsgLoader();
        if (newMessage === 'fruits') {
            setQuickButtons([{ label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' }]);
        } else {
            addResponseMessageWithSender("Test Sender", newMessage);
        }
    }, 2000);
}

const handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
}

const handleSubmit = (msgText: string) => {
    if (msgText.length < 80) {
        addUserMessage("Uh oh, please write a bit more.");
        return false;
    }
    return true;
}

export const Primary = () => <Widget
    title="Bienvenido"
    subtitle="Asistente virtual"
    senderPlaceHolder="Escribe aquí ..."
    handleNewUserMessage={handleNewUserMessage}
    handleQuickButtonClicked={handleQuickButtonClicked}
    imagePreview
    handleSubmit={handleSubmit}
    emojis
    resizable
/>

