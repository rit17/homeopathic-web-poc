import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <header className="navbar">
        <h1>HomeoCare</h1>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to HomeoCare</h1>
        <p>Your trusted partner in holistic healing.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Personalized Advice</h3>
          <p>Get remedies tailored to your unique symptoms through intelligent suggestions.</p>
        </div>
        <div className="feature-card">
          <h3>Natural Healing</h3>
          <p>We believe in gentle, natural methods for treating chronic and acute conditions.</p>
        </div>
        <div className="feature-card">
          <h3>Chat With Our Bot</h3>
          <p>Use our AI-powered assistant to find answers and recommendations 24/7.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 HomeoCare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
