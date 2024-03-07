// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'https://lookerstudio.google.com/embed/reporting/fdf60c30-90fd-4298-b249-ec636c55ee3d/page/p_9o97ftsted');
        next();
      }
    ]
  }
});
