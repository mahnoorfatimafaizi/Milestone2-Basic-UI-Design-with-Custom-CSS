import Link from "next/link";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./images/logo.avif" alt="Logo" />
        AI & Finance
      </div>
      <nav className="nav">
        <ul style={{ display: "flex", gap: "50px", margin: 10, padding: 0 }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/solution">AI in Finance</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
