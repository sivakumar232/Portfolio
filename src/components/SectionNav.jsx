import React, { useState, useEffect } from 'react';

const SectionNav = () => {
    const [activeSection, setActiveSection] = useState('about');

    const sections = [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }

            // Also check if we're in the github section and activate contact
            const githubElement = document.getElementById('github');
            if (githubElement) {
                const { offsetTop, offsetHeight } = githubElement;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection('contact');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="fixed bottom-24 right-6 z-40 hidden md:block">
            <div className="space-y-1">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-right px-3 py-1 text-sm transition-all ${activeSection === section.id
                            ? 'text-black dark:text-white font-bold'
                            : 'text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-400'
                            }`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default SectionNav;
