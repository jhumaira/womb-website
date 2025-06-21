import logo from './assets/logo.png';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '@fontsource-variable/inter';
import FindProviderPage from './pages/FindProviderPage';
import BecomeDoulaPage from './pages/BecomeDoulaPage';
import BirthVideosAndPhotos from './pages/BirthVideosAndPhotos';
import { CoursesPage, CourseDetail } from './pages/CoursesPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      q1: form.q1.value,
      q2: form.q2.value,
      q3: form.q3.value,
      q4: form.q4.value,
      q5: form.q5.value,
      q6: form.q6.value,
    };
    console.log("Form submitted", data);
    alert("Thank you for contacting us! We'll be in touch soon.");
    form.reset();
  };

  if (!isLoggedIn) {
    return (
      <div className="login-screen" style={{ backgroundColor: '#e8f5e9', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '450px', width: '90%' }}>
          <h2 style={{ color: '#2e7d32', marginBottom: '1rem' }}>About This Resource Hub</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '1.5rem', color: '#4e4e4e' }}>
            This website is dedicated to improving maternal and newborn health outcomes in rural and low-resource areas across the globe. Through accessible, culturally sensitive training materials, our goal is to support birth workers in saving lives and ensuring safe deliveries for all mothers.
          </p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Username" required style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }} />
            <input type="password" placeholder="Password" required style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }} />
            <button type="submit" style={{ backgroundColor: '#2e7d32', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Enter</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <header className="navbar">
        <div className="container">
          <div className="logo">
          <img src={logo} alt="Amal Ar‑Rahim Logo" className="h-10 w-auto" />

          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/find-provider" className="cta">Find an Advocate</Link>
            <Link to="/faq" className="cta">FAQ</Link>
            <a className="cta" href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <section className="hero">
                <div className="container">
                  <div className="hero-text">
                    <h2>Empowering mothers to birth naturally.</h2>
                    <p>
                      Community-based maternal care rooted in softness, knowledge, and the divine gift of motherhood.
                    </p>
                    <div className="hero-buttons">
                      <Link to="/faq">
                        <button className="primary">Learn More</button>
                      </Link>
                      <Link to="/become-a-doula">
                      <button className="secondary">Become a Doula</button>
                    </Link>

                    </div>

                  </div>
                </div>
              </section>

              <section id="services" className="services-section">
                <div className="container">
                  <h2>What can we help you with today?</h2>
                  <div className="services">
                    <Link to="/curriculum" className="card">
                      <img src="https://img.icons8.com/?size=100&id=3647&format=png&color=000000" alt="Curriculum Icon" />
                      <h3>AMANI Curriculum Materials</h3>
                    </Link>

                    <div className="card">
                      <img src="https://img.icons8.com/?size=100&id=18260&format=png&color=000000" alt="Globe Icon" />
                      <a href="/media-links.pdf" target="_blank" rel="noopener noreferrer">
                        <h3>Global Health Media Links</h3>
                      </a>
                    </div>

                    <div className="card">
                      <img src="https://img.icons8.com/?size=100&id=_Gk0DsQnOUpt&format=png&color=000000" alt="Education Icon" />
                      <a href="/education-resources.pdf" target="_blank" rel="noopener noreferrer">
                        <h3>Educational Resources</h3>
                      </a>
                    </div>

                    <Link to="/birthvideos" className="card">
                      <img src="https://img.icons8.com/?size=100&id=PKDWX09EyFZN&format=png&color=000000" alt="Baby Icon" />
                      <h3>Birth Videos & Photos</h3>
                    </Link>


                    <div className="card">
                      <img src="https://img.icons8.com/?size=100&id=nDswYGvqncqF&format=png&color=000000" alt="Affirmation Icon" />
                      <a href="/affirmations.html" target="_blank" rel="noopener noreferrer">
                        <h3>Dhikr Cards & Birth Affirmations</h3>
                      </a>
                    </div>

                    <Link to="/faq" className="card">
                      <img src="https://img.icons8.com/?size=100&id=103642&format=png&color=000000" alt="Answers Icon" />
                      <h3>Get the answers you need</h3>
                    </Link>
                  </div>
                </div>
              </section>

              <section id="contact" className="contact-section">
                <div className="container">
                  <h2>Find Your Advocate</h2>
                  <p>Join a growing circle of women learning how to care, advocate, and restore birth in their communities.</p>
                  <form className="contact-form" onSubmit={submitForm}>
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Your Name" required />
                      <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    {["q1", "q2", "q3", "q4", "q5", "q6"].map((q, idx) => (
                      <div className="form-group" key={q}>
                        <label htmlFor={q}>{idx + 1}. Question {idx + 1}</label>
                        <textarea id={q} name={q} rows="3" required></textarea>
                      </div>
                    ))}
                    <a
  href="mailto:amalarrahim@gmail.com?subject=Advocate%20Sign-Up&body=Assalamu%20Alaikum,%0D%0A%0D%0AI%20am%20interested%20in%20becoming%20a%20maternal%20advocate%20through%20Amal%20al-Rahim.%20Here%20is%20my%20information:%0D%0A%0D%0AName:%0D%0AEmail:%0D%0ALocation:%0D%0ALanguages%20Spoken:%0D%0AExperience:%0D%0AAvailability:%0D%0AReason%20for%20interest:%0D%0A%0D%0AJazakum%20Allah%20khairan."
  className="bg-[#19647E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#11485b] transition duration-300 inline-block"
>
  Get Started
</a>

                  </form>
                </div>
              </section>

              <footer className="footer">
                <div className="container">
                  <p>&copy; 2025 Amal Ar-Rahim, LLC. Empowering mothers and families.</p>
                </div>
              </footer>
            </div>
          }
        />

        {/* Additional Routes */}
        <Route path="/find-provider" element={<FindProviderPage />} />
        <Route path="/curriculum" element={<CoursesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/become-a-doula" element={<BecomeDoulaPage />} />
        <Route path="/birthvideos" element={<BirthVideosAndPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
