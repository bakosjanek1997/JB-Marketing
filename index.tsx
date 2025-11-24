import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('App starting...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  const msg = "FATAL ERROR: Could not find root element to mount to. Check index.html for <div id='root'></div>";
  console.error(msg);
  throw new Error(msg);
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App mounted successfully');
} catch (error) {
  console.error('Error mounting React app:', error);
}
