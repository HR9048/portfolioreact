import React, { useState, useEffect } from 'react';

const colors = [
    'red',
    'rgb(68, 132, 206)',
    'green',
    'rgb(26, 215, 192)',
    'blue',
    'yellow',
    'rgb(255, 155, 17)',
    'purple',
    'orange',
    'rgb(155, 89, 182)',
    'pink',
    'cyan',
    'rgb(255, 127, 127)',
    'magenta',
    'brown',
    'rgb(236, 240, 241)',
];

const socialMediaLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/hr9048',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                color='black'
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bi bi-github"
            >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/harish_raghoji',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" 
                /></svg>
        ),
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/harishraghoji.raghoji',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" color='blue' width="50" height="50" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/raghoji_harish',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                color='blue'
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bi bi-twitter"
            >
                <path d="M15.458 3.465a5.572 5.572 0 0 1-1.65.455 2.825 2.825 0 0 0 1.244-1.558 5.615 5.615 0 0 1-1.772.67 2.81 2.81 0 0 0-4.803 2.566 7.984 7.984 0 0 1-5.8-2.943 2.809 2.809 0 0 0-.38 1.416 2.808 2.808 0 0 0 1.255 2.339 2.841 2.841 0 0 1-1.274-.352v.036a2.81 2.81 0 0 0 2.257 2.76 2.84 2.84 0 0 1-.74.098 2.52 2.52 0 0 1-.538-.05 2.81 2.81 0 0 0 2.623 1.96 5.637 5.637 0 0 1-3.48 1.2 5.71 5.71 0 0 1-.68-.04 7.994 7.994 0 0 0 4.317 1.266c5.091 0 7.883-4.216 7.883-7.883 0-.12 0-.24-.007-.36a5.58 5.58 0 0 0 1.392-1.422z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/harish-raghoji-01a605257/',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path
                    d="M21.656 0H2.344C1.049 0 0 1.048 0 2.344v19.313C0 22.952 1.048 24 2.344 24h19.312C22.951 24 24 22.952 24 21.656V2.344C24 1.048 22.951 0 21.656 0zM7.62 20.23H4.548V9.568h3.072V20.23zM5.084 8.628a1.71 1.71 0 01-1.71-1.71 1.71 1.71 0 011.71-1.711 1.71 1.71 0 110 3.42zm15.144 11.6h-3.07v-5.413c0-1.288-.025-2.942-1.79-2.942-1.792 0-2.07 1.398-2.07 2.85v5.506H10.24V9.568h2.932v1.513h.04c.407-.773 1.403-1.588 2.892-1.588 3.086 0 3.648 2.03 3.648 4.672v5.537z"
                    fill="#0073b1"
                />
            </svg>
        ),
    },
];

const Name: React.FC = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) =>
                (prevIndex + 1) % colors.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentColor = colors[currentColorIndex];

    // Explicitly type the CSS properties
    const backgroundStyle: React.CSSProperties = {
        width: '100vw',
        height: '550px',
        backgroundColor: currentColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '24px',
        transition: 'background-color 1s ease-in-out', // Smooth color transition
    };

    const socialMediaLinksList = socialMediaLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
        </a>
    ));

    return (
        <div style={backgroundStyle}>
            <h1>HARISH RAGHOJI</h1>
            <div className="social-media-links">{socialMediaLinksList}</div>
        </div>
    );
};

export default Name;
