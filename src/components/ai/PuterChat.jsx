'use client'
import { useEffect, useState } from 'react';
import '@styles/ai/ai.css'
import Image from 'next/image';
import Hover from '@public/Images/ai/hover.svg';
import NoHover from '@public/Images/ai/nohover.svg';

export default function PuterChat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [buttonHl, setButtonHl] = useState(false);

    useEffect(() => {
        const loadPuterAndChat = () => {
            if (!window.puter) {
                // console.error('AI is not available');
            } else if (window.puter.ai) {
                // Prevent connection attempts by ensuring puter.ai is loaded without requiring a socket.io connection
                // console.log('Puter loaded without socket.io');
            }
        };
        

        if (!document.getElementById('puter-js')) {
            const script = document.createElement('script');
            script.src = "https://js.puter.com/v2/";
            script.id = 'puter-js';
            script.onload = loadPuterAndChat;
            document.body.appendChild(script);
        } else {
            loadPuterAndChat();
        }
    }, []);
    
 
    // adv gen ai certi prog

    const handleInputChange = (event) => {
        const newInput = event.target.value;
        setInput(newInput);
        setButtonHl(newInput.trim() !== ''); // Set buttonHl to true if input is not empty, false if it is
    };

    const handleSendMessage = () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, `You: ${input}`]);

        if (window.puter) {
            setIsTyping(true); // Show skeleton while AI is thinking
            window.puter.ai.chat(input).then(response => {
                const responseMessage = response.message.content;
                const formattedResponse = formatResponse(responseMessage);
                simulateTyping(formattedResponse);
            }).catch(err => {
                console.error('Error fetching response from Puter:', err);
                setMessages(prev => [...prev, 'AI: Sorry, I encountered an error.']);
                setIsTyping(false); // Hide skeleton after error
            });
        }

        setInput('');
        setButtonHl(false); // Reset buttonHl when the message is sent
    };

    const simulateTyping = (message) => {
        let currentIndex = 0;
        const typingSpeed = 8; // Adjust typing speed here (ms per character)
        setIsTyping(false); // Stop skeleton animation once typing is complete

        let typingMessage = "AI: ";
    
        const typeCharacter = () => {
            if (currentIndex < message.length) {
                typingMessage += message[currentIndex];
                setMessages(prev => [...prev.slice(0, -1), typingMessage]);
                currentIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                setIsTyping(false); // Stop skeleton animation once typing is complete
            }
        };
    
        setMessages(prev => [...prev, typingMessage]);
        typeCharacter();
    };

    const formatResponse = (response) => {
        return response
            .replace(/### (.+?)(\n|$)/g, '<h3 class="heading-h3">$1</h3>') 
            .replace(/## (.+?)(\n|$)/g, '<h2 class="heading-h2">$1</h2>') 
            .replace(/# (.+?)(\n|$)/g, '<h1 class="heading-h1">$1</h1>') 
            .replace(/\*\*(.*?)\*\*/g, '<strong class="strong-text">$1</strong>')  // Apply strong-text class
            .replace(/\*(.*?)\*/g, '<strong class="strong-text">$1</strong>')     // Apply strong-text class
            .replace(/- (.+?)(\n|$)/g, '<li class="list-item">$1</li>')           // Apply list-item class
            .replace(/\n/g, '<br />')
            .replace(/<\/h2>/g, '</h2><ul class="unordered-list">')               // Apply unordered-list class
            .replace(/<\/li>/g, '</li></ul>');
    };



    return (

        <div className="prfec-ai">
            <div className='prfec-ai-container'>
                <div className="chat-container">
                    {messages.map((msg, index) => {
                        const isUser = msg.startsWith("You:");
                        return (
                            <p
                                key={index}
                                className={`para-text ${isUser ? 'user-message' : 'ai-message'}`}
                                dangerouslySetInnerHTML={{ __html: msg.replace(/You:/, '<strong>You:</strong>').replace(/AI:/, '<strong>AI:</strong>') }}
                            />
                        );
                    })}

                    {isTyping && (
                        <div className="loading-skeleton ai-message">
                            {/* Skeleton animation while typing */}
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                        </div>
                    )}
                    
                </div>
                <div className='chat-input'>
                    <div className='chat-input-container'>
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type your message..."
                        />
                        <div style={{display:"flex",alignItems:"center"}}>
                            <Image src={buttonHl ? Hover : NoHover} alt="Button Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
