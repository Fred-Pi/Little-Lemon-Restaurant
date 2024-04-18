module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '640px',      // Small screens (e.g., mobile phones)
                'md': '768px',      // Medium screens (e.g., tablets)
                'lg': '1024px',     // Large screens (e.g., small desktops)
                'xl': '1280px',     // Extra large screens (e.g., large desktops)
                '2xl': '1536px',    // Extra extra large screens
                // Add more breakpoints as needed
            },
            colors: {
                lemon: {
                    green: '#495E57',
                    yellow: '#F4CE14',
                    pink: '#EE9972',
                    lightpink: '#FBDABB',
                    grey: '#EDEFEE',
                    black: '#333333',
                },
                'hero-bg': 'green', // Equivalent to background-color: #495E57;
                'hero-accent': 'yellow', // Equivalent to color: #F4CE14;
                'hero-text': 'white', // Equivalent to color: #FFFFFF;
            },
            spacing: {
                '4.375': '1.375rem', // Equivalent to margin-bottom: -4.375rem;
            },
            gridTemplateColumns: {
                'hero-layout': 'repeat(2, minmax(0, 1fr))', // Equivalent to grid-template-columns: 1fr 1fr;
            },
            borderRadius: {
                'hero-button': '0.375rem', // Equivalent to border-radius: 0.375rem;
            },
            extend: {
                inset: {
                    '-1.875': '-0.5875rem', // Equivalent to padding-top: 1.875rem;
                },
            },
            fontFamily: {
                'markazi': ['Markazi Text', 'sans-serif'],
                'karla': ['Karla Regular', 'sans-serif']
            },
        },
    },
};
