import "../styles/about.css";

const AboutContactPage = () => {
  return (
    <main>
      <div className="aboutContactPage container">
        <section className="aboutSection">
          <h2>About Us</h2>
          <p>
            At <strong>AI & Finance</strong>, our mission is to bridge the gap
            between AI and finance by educating individuals and organizations on
            the transformative impact AI can have in the financial sector. We
            aim to provide innovative AI-driven solutions tailored for financial
            institutions, empowering them to make data-driven decisions,
            optimize processes, and enhance customer experience. Join us in
            embracing the future of finance through AI.
          </p>
        </section>

        <section className="contactSection">
          <h2>Contact Us</h2>
          <p>
            For inquiries or collaboration opportunities, feel free to reach out
            through the form below:
          </p>

          <form className="contactForm">
            <div className="formGroup">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </section>

        <section className="followUsSection">
          <h2>Follow Us</h2>
          <p>Connect with us for updates, insights, and networking:</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default AboutContactPage;
