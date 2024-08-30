// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-full flex justify-between items-start px-4">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold">Rehyann Saini</h1>
          <p className="text-lg">Panda Fe13 Prod.</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-24">
          {/* Social Section */}
          <div>
            <h2 className="text-lg font-bold">Social</h2>
            <ul className="mt-2 space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/rehyann.saini.5/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rehyann_saini_/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@rehyannsaini"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold">Contact</h2>
            <ul className="mt-2 space-y-3">
              <li>
                <a href="tel:7701919054" className="hover:underline">
                  7701919054
                </a>
              </li>
              <li>
                <a
                  href="mailto:rehyannsaini@gmail.com"
                  className="hover:underline"
                >
                  rehyannsaini
                </a>
              </li>
              <li>Delhi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-4 mt-8">
        <hr className="border-t border-gray-700" />
        <p className="text-center text-sm mt-4">&copy; 2024 PandaCore</p>
      </div>
    </footer>
  );
};

export default Footer;
