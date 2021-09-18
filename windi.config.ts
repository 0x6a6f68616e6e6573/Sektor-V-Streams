import { defineConfig } from 'windicss/helpers';

// import colors from 'windicss/colors';

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  preflight: true,
  plugins: [require('windicss/plugin/forms')],
  theme: {
    // colors,
  },
});
