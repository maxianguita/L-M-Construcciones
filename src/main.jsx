import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// LÍNEA CORREGIDA: Usando 'document' en lugar de 'documento'
// y eliminando el operador '!' para usar JavaScript estándar.
const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    // Esto es opcional, pero ayuda a debuggear si el ID 'root' no se encuentra
    console.error("No se encontró el elemento con ID 'root' en el index.html");
}