const features = [
  {
    icon: '≡',
    title: 'Business Stratagy',
    text: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: '◫',
    title: 'App Development',
    text: "We'll handle everything from to app development process until it is time to make your project live.",
  },
  {
    icon: '▣',
    title: 'Business Stratagy',
    text: "We'll help you optimize your business process to maximize profitability and eliminate unnecessary costs.",
  },
  {
    icon: '▯',
    title: 'Mobile App',
    text: 'Using our expertise in mobile application development to create beautiful pixel-perfect designs.',
  },
  {
    icon: '◍',
    title: 'SEO Optimisation',
    text: 'Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!',
  },
  {
    icon: '◈',
    title: 'UX Consulting',
    text: 'A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.',
  },
];

const portfolioItems = [
  {
    category: 'Development',
    title: 'Personal Portfolio Website',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Design',
    title: 'Modern Landing Page UI',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'App',
    title: 'Dashboard App Experience',
    image:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
  },
];

function App() {
  return (
    <div className="site-container">
      <div className="App">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4128/4128349.png"
            alt="react-logo"
            width="40px"
            height="40px"
          />
          <h3>INBIO</h3>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">RESUME</a>
            </li>
            <li>
              <a href="#">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#">CLIENTS</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">BLOGS</a>
            </li>
            <li>
              <a href="#">CONTACTS</a>
            </li>
          </ul>
          <div className="cart-buynow">
            <img
              src="https://static.thenounproject.com/png/47398-200.png"
              alt="search"
              width="50px"
              height="50px"
            />
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-left">
          <p className="intro">WELCOME TO MY WORLD</p>
          <h1>
            Hi, I'm <span>Jone Lee</span>
            <br />a Professional Coder.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptate, doloremque, quisquam, alias deleniti corporis consequatur
            cumque magnam sed. Voluptas voluptate, doloremque, quisquam, alias
            deleniti corporis consequatur cumque magnam sed.
          </p>

          <div className="hero-links">
            <div>
              <h4>FIND WITH ME</h4>
              <div className="icon-list">
                <button type="button">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" width="20px" height="20px"/>
                </button>
                <button type="button">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" width="20px" height="20px"/>
                </button>
                <button type="button">
                    <img src="https://images.icon-icons.com/3398/PNG/512/square_linkedin_logo_icon_214718.png" alt="linkedin" width="20px" height="20px"/>
                </button>
              </div>
            </div>

            <div>
              <h4>BEST SKILL ON</h4>
              <div className="icon-list">
                <button type="button">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" width="20px" height="20px"/>
                </button>
                <button type="button">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="node" width="20px" height="20px"/>   
                </button>
                <button type="button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react" width="20px" height="20px"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="content-right-image">
            <img
              src="https://www.pngall.com/wp-content/uploads/8/Man-PNG-Free-Download.png"
              alt="react-logo"
              width="300px"
              height="400px"
            />
          </div>
        </div>
      </div>

      <section className="features-section">
        <p className="features-kicker">FEATURES</p>
        <h2>What I Do</h2>

        <div className="features-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title + item.icon}>
              <span className="feature-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <p className="portfolio-kicker">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h2>My Portfolio</h2>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="portfolio-card-body">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
