const Navbar = () => {
  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a href="/" className="flex items-center justify-center">
        <EclipseIcon className="h-6 w-6" />
        <span className="sr-only">Ethereum Wallet</span>
      </a>
      <nav className="ml-auto items-center flex gap-4 sm:gap-6">
        <a
          href="#"
          className="font-medium hidden sm:block hover:underline underline-offset-4"
        >
          Features
        </a>
        <a
          href="#"
          className="font-medium hidden sm:block hover:underline underline-offset-4"
        >
          Security
        </a>
        <a
          href="#"
          className="font-medium hidden sm:block hover:underline underline-offset-4"
        >
          FAQ
        </a>
        <a
          href="#"
          className="font-medium hidden sm:block hover:underline underline-offset-4"
        >
          Contact
        </a>
        {localStorage.getItem("address") && (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-xl"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

function EclipseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
}
