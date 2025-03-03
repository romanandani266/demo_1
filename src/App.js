import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to My Static React Page</h1>
        <p>This is a simple static webpage hosted on GitHub Pages.</p>
      </header>
      <main className="main-content">
        <section>
          <h2>About This Page</h2>
          <p>
            This page is built using React and deployed to GitHub Pages. It demonstrates how to create and host a static webpage.
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Responsive Design</li>
            <li>Clean and Modern UI</li>
            <li>Easy to Deploy</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Static React Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;