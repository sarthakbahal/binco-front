import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-icon">♻️</span>
              <span>bin<b>GO</b>!</span>
            </div>
            <nav className="nav">
              <a href="#how-it-works">How It Works</a>
              <a href="#locations">Locations</a>
              <a href="#about">About</a>
              <Link to="/login" className="btn btn-outline">Login</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Turn <span className="text-green">Trash</span> Into <span className="text-yellow">Rewards!</span></h1>
          <p className="subtitle">Recycle your waste at our smart vending machines and earn binCoins to redeem amazing deals and discounts.</p>
          
          <div className="steps-flow">
            <div className="step">
              <div className="step-icon">🗑️</div>
              <span>Waste</span>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">♻️</div>
              <span>Machine</span>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">🪙</div>
              <span>binCoins!</span>
            </div>
          </div>

          <Link to="/signup" className="btn btn-primary">
            Get Started <span>→</span>
          </Link>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">12,540</div>
              <div className="stat-label">
                <span>📍</span> Smart Machines
              </div>
            </div>
            <div className="stat">
              <div className="stat-number">8.2M</div>
              <div className="stat-label">
                <span>👥</span> Active Users
              </div>
            </div>
            <div className="stat">
              <div className="stat-number">46,000</div>
              <div className="stat-label">
                <span>♻️</span> Tons Recycled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <p className="section-subtitle">Three simple steps to start earning rewards</p>
          
          <div className="cards">
            <div className="card">
              <div className="card-icon blue">
                <span>📱</span>
              </div>
              <h3>1. Scan QR Code</h3>
              <p>Find an EcoBin machine and scan the QR code to get started</p>
            </div>
            
            <div className="card">
              <div className="card-icon green">
                <span>♻️</span>
              </div>
              <h3>2. Insert Waste</h3>
              <p>Insert your recyclable items - bottles, cans, or containers</p>
            </div>
            
            <div className="card">
              <div className="card-icon yellow">
                <span>🪙</span>
              </div>
              <h3>3. Earn binGO coins</h3>
              <p>Get rewarded with binGO coins to redeem for discounts and deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          
          <div className="testimonial-cards">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>"I've earned over 500 binCoins in just a month! The process is so easy and the rewards are great."</p>
              <div className="author">- Sarah J.</div>
            </div>
            
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>"Finally, a recycling program that actually rewards you. I've been using EcoBin for 6 months and love it!"</p>
              <div className="author">- Michael T.</div>
            </div>
            
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>"The app is super user-friendly and I love seeing my binCoins add up. Great for the environment and my wallet!"</p>
              <div className="author">- Priya K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Earning?</h2>
          <p>Join millions of users making a difference while earning rewards.</p>
          <Link to="/signup" className="btn btn-white">
            Sign Up Now <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo">
                <span className="logo-icon">♻️</span>
                <span>bin<b>GO</b>!</span>
              </div>
              <p>Making recycling rewarding for everyone.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <ul>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#locations">Locations</a></li>
                  <li><a href="#rewards">Rewards</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Support</h4>
                <ul>
                  <li><a href="#help">Help Center</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} binGO!. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;