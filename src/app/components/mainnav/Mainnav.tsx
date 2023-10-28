const Mainnav = () => {
  return (
    <nav className="bg-gray-300 w-full flex py-6 px-5 justify-between">
      <div>Logo</div>
      <div className="flex space-x-5">
        <a href="/">Pricing</a>
        <a href="/">Templates</a>
        <a href="/">Login</a>
        <a href="/">Sign up for free</a>
      </div>
    </nav>
  );
};

export default Mainnav;
