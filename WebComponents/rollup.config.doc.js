import resolve from '@rollup/plugin-node-resolve';

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: 'scripts/designsystem-doc.js',
    output: {
        file: 'dist/designsystem-doc.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
    ],
};

export default config;