"use client";
import { useState } from 'react';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block" onMouseLeave={handleMouseLeave}>
            <div 
                className="cursor-pointer font-bold" 
                onMouseEnter={toggleMenu}
            >
                Contact Me
            </div>
            {isOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-gray-200 border border-gray-300 shadow-lg">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="mailto:krygoktas123@gmail.com" className="block">Email</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="tel:+905388576008" className="block">Phone</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="https://www.linkedin.com/in/koray-g%C3%B6kta%C5%9F-06a12120a/" target="_blank" rel="noopener noreferrer" className="block">LinkedIn</a> 
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="https://github.com/koraygoktas" target="_blank" rel="noopener noreferrer" className="block">Github</a> 
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Contact;
