import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Quotes = () => {
    const quotes = [
        // Bhagavad Gita – belief, mind, karma
        {
            text: "Man is made by his belief. As he believes, so he is.",
            author: "Bhagavad Gita"
        },
        {
            text: "The mind can be your friend or your enemy.",
            author: "Bhagavad Gita"
        },
        {
            text: "A person is elevated by the self, and degraded by the self.",
            author: "Bhagavad Gita"
        },
        {
            text: "One who has faith attains wisdom.",
            author: "Bhagavad Gita"
        },
        {
            text: "You become what you constantly think about.",
            author: "Bhagavad Gita"
        },
        {
            text: "Act without attachment, and you will be free.",
            author: "Bhagavad Gita"
        },

        // Upanishads – self, consciousness, truth
        {
            text: "You are what your deepest desire is.",
            author: "Upanishads"
        },
        {
            text: "As the mind is, so is the person.",
            author: "Upanishads"
        },
        {
            text: "When the self is known, all is known.",
            author: "Upanishads"
        },
        {
            text: "The self is the witness of all thoughts.",
            author: "Upanishads"
        },
        {
            text: "From truth, wisdom arises.",
            author: "Upanishads"
        }
    ];

    const [currentQuote, setCurrentQuote] = useState(() => {
        // Select a random quote on initial load
        return Math.floor(Math.random() * quotes.length);
    });

    // No auto-rotation - quote only changes on page refresh or manual click

    return (
        <div className="text-black border border-neutral-400 dark:border-neutral-700  border-dashed dark:text-white rounded-xl px-6 py-8">
            <div className="max-w-3xl mx-auto text-center">
                <FaQuoteLeft className="text-6xl text-neutral-400 dark:text-neutral-600 mx-auto " />

                <div className="relative min-h-[120px] flex items-center justify-center">
                    <div
                        key={currentQuote}
                        className="animate-[fadeIn_0.5s_ease-in-out]"
                    >
                        <p className="text-xl md:text-2xl font-hanken font-medium leading-relaxed mb-4 text-neutral-700 dark:text-neutral-300">
                            "{quotes[currentQuote].text}"
                        </p>
                        <p className="text-sm font-hanken text-neutral-500 dark:text-neutral-500">
                            — {quotes[currentQuote].author}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quotes;
