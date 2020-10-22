import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';


// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: 'scripts/designsystem-components.js',
    output: {
        file: 'dist/designsystem-bundle.js',
        format: 'umd',
    },
    plugins: [
        resolve(),
        scss(),
    ],
};

export default config;