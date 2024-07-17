const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Vyom Raturi</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a
          href="https://www.linkedin.com/in/vyomraturi/"
          className="text-xs hover:underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/vyom_raturi"
          className="text-xs hover:underline underline-offset-4"
        >
          Twitter
        </a>
        <a
          href="https://vyomraturi.github.io/"
          className="text-xs hover:underline underline-offset-4"
        >
          Portfolio
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
