// Base URL for the Django API
// In development, this falls back to localhost. 
// In production (Vercel), we will set the VITE_API_URL environment variable.
export const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
