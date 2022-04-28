import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      Copyright &copy; {year}
    </footer>
  );
};

export default Footer;
