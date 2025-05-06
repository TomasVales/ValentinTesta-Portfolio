import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0d] to-[#07070a] text-white px-4 py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-center space-y-1">
        <p className="text-xs text-neutral-500 tracking-wider">
          © 2025 Valentin Testa. All rights reserved.
        </p>
        <a
          href="https://kiad.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-pink-400 transition"
        >
          Developed by KIAD
        </a>
      </div>
    </footer>
  );
};

export default Footer;
