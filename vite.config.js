import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     proxy: {
//       "/": "http://localhost:5000" // change if your backend runs on a different port
//     }
//   }
// });