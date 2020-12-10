module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // new
                primary: 'var(--color-primary)', // new
                secondary: 'var(--color-secondary)', // new
                whiteAlt: 'var(--color-white-alt)', // new
            }, // new
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
