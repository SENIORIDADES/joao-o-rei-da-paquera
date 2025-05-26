
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx loaded');
console.log('DOM loaded:', document.readyState);
console.log('Root element:', document.getElementById("root"));

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  console.log('Rendering App...');
  root.render(<App />);
  console.log('App rendered successfully');
} else {
  console.error('Root element not found!');
}
