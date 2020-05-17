import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloworld.jsx';

const App = () => (
    <div>
        <HelloWorld />
    </div>
)

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)