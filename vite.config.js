import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        VITE_ACCESSIBILITY_API_KEY: `"${
            import.meta.env.VITE_ACCESSIBILITY_API_KEY
        }"`,
    },
});
