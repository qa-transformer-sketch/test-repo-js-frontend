import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SailfishRecorderInstrumentation from './SailfishRecorderInstrumentation';
import { initRecorder } from "@sailfish-ai/recorder";
initRecorder({
  apiKey: '0718505c-7250-4ac4-9f8e-ca14a771b89c',
  domainsToPropagateHeaderTo: [
    // TODO - fill out by engineering
  ],
  domainsToNotPropagateHeaderTo: [
    // TODO - fill out by engineering
  ],
  enableShortcuts: false
}).catch(console.error);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
     <SailfishRecorderInstrumentation />
  </StrictMode>,
)
