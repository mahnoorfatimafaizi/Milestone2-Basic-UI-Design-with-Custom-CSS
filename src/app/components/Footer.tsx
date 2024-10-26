import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src="./images/logo.jpg" alt="logo" />
        </div>
        <div>
          <p>
            Stay up to date with the latest trends in AI and finance.
            <br />
            Subscribe to our newsletter to receive updates on groundbreaking
            technologies, industry news, and expert insights.
          </p>
        </div>
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
