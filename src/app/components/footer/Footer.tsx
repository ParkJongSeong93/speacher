const Footer = () => {
  return (
    <footer className="bg-gray-300 py-6 px-5">
      <div className="flex justify-between">
        <div>Logo</div>
        <div className="flex flex-col">
          <p>Product</p>
          <a href="/">Help</a>
          <a href="/">Change log*</a>
          <a href="/">Templates</a>
          <a href="/">Inspiration</a>
          <a href="/">Contact us</a>
        </div>
        <div className="flex flex-col">
          <p>Company</p>
          <a href="/">Team*</a>
          <a href="/">Team of Service</a>
          <a href="/">Privacy Policy</a>
          <p>Language</p>
          <a href="/">English</a>
        </div>
        <div className="flex flex-col">
          <p>Follow us</p>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
          <a href="/">Linkedin</a>
          <a href="/">TikTok</a>
        </div>
      </div>
      <p>Speachers. Inc 2023</p>
    </footer>
  );
};

export default Footer;
