import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-full flex flex-col md:flex-row justify-between items-start px-4">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold">Rehyann Saini</h1>
          <p className="text-base md:text-lg">Panda Fe13 Prod.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:space-x-24">
          {/* Social Section */}
          <div className="mb-6 md:mb-0">
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
                  rehyannsaini@gmail.com
                </a>
              </li>
              <li>Delhi</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
