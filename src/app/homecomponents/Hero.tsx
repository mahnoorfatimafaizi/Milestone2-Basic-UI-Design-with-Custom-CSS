import '../styles/home.css';

const Hero = () => {
  return (
    <section className="hero-section">
    <div className="text-container">
        <h1>Unlock the Power of AI in Finance</h1>
        <p>
            Revolutionizing financial decision-making with cutting-edge AI technology.
        </p>
        <p>
            Your trusted source for exploring how artificial intelligence is transforming the finance industry. 
            Our platform delves into the latest AI innovations, revolutionizing financial operations, optimizing decision-making processes, 
            and empowering businesses to stay competitive. Whether you are a finance expert or simply curious, we bring the future of finance to you.
        </p>
    </div>
    <img src="./images/hero.jpg" alt="AI & Finance" className="hero-image" />
</section>
  )
}

export default Hero