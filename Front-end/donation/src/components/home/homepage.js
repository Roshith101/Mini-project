import React from 'react';
import './HomePage.css';
import { animateScroll as scroll } from 'react-scroll';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').slice(1);
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -50
    });
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    
    <div className="home-container">


      <section id="hero" className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Make a Difference</h2>
          <p className="hero-description">Join us in creating a better future for those in need.</p>
          <a href="#donate" className="hero-btn">view more</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-description">
            "Imagine a world where every child goes to bed with a full stomach, where families never have to worry about the next meal, and where no one is left behind in times of crisis. At Donocare❤️, we are driven by a deep desire to turn this vision into a reality.</p>

          <p>We've witnessed the heartbreaking stories of children struggling to survive, families torn apart by poverty, and communities devastated by natural disasters. It's these stories that fuel our relentless commitment to making a difference. We believe that no one should have to endure such hardships.</p>

          <p>Through our dedicated team and compassionate supporters like you, we provide life-saving aid, essential resources, and sustainable solutions to those in need. From feeding hungry children to rebuilding shattered communities, we leave no stone unturned in our mission.</p>

          <p>Every dollar donated has the power to change lives. It means a child won't go to bed hungry tonight, a family will have a roof over their heads, and hope will be restored in the hearts of those who have lost everything. Your generosity can be the beacon of light that guides them through the darkest times.</p>

          <p>Together, let's create a world where compassion knows no boundaries. Let's make a lasting impact that transcends generations. With your help, we can rewrite the stories of countless lives, providing hope, healing, and a chance at a better future.</p>

          <p>Open your heart, extend your hand, and join us on this incredible journey of love, empathy, and transformation. Together, we can make miracles happen."</p>
        </div>
      </section>

      <section id="causes" className="causes">
        <div className="causes-content">
          <h2 className="section-title">Causes</h2>
          <div className="cause-card">
            <div className="cause-image">
              <img src="./cause1.jpeg" alt="Cause 1" />
            </div>
            <h3 className="cause-title">Education for All</h3>
            <p className="cause-description">
              Support access to quality education for children in underserved communities.
            </p>
            <a href="#donate" className="hero-btn">Donate</a>

          </div>
          <div className="cause-card">
            <div className="cause-image">
              <img src="./cause2.jpeg" alt="Cause 1" />
            </div>
            <h3 className="cause-title">Clean Water Initiative</h3>
            <p className="cause-description">
              Help provide clean and safe drinking water to areas affected by water scarcity.
            </p>
                        <a href="#donate" className="hero-btn">Donate</a>

          </div>
          <div className="cause-card">
            <div className="cause-image">
              <img src="./cause3.jpeg" alt="Cause 1" />
            </div>
            <h3 className="cause-title">Food Security Program</h3>
            <p className="cause-description">
              Support efforts to alleviate hunger and ensure food security for vulnerable populations.
            </p>
            <a href="#donate" className="cause-btn" onClick={handleClick}>
              Donate
            </a>
          </div>
        </div>
      </section>

      <section id="donate" className="donate">
        <div className="donate-content">
          <h2 className="section-title">Make a Donation</h2>
          {/* <p className="section-description">
            <h1>"We make a living by what we get, but we make a life by what we give."</h1>
            Your contribution can make a real difference. Every donation counts.
          </p> */}
          <h1>"We make a living by what we get, but we make a life by what we give."</h1>

          <div className="video-wrapper">
            <YouTube videoId="CiFoHm7HD94" opts={opts} />
          </div>
          <p className='fonts'>
            Your contribution can make a real difference. Every donation counts.
          </p>
          <Link to="/Donationpage"><a className="donate-btn">Donate</a></Link>

        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Have any questions or suggestions? We'd love to hear from you.
          </p>
          <div className="contact-details">
            <p>Email: Donocare@gmail.com</p>
            <p>Phone: 123456780</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Donocare❤️. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default HomePage;