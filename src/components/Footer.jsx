import image from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="container mx-auto px-2">
        <div className="flex justify-center items-center flex-col pt-60 pb-32">
          <img src={image} alt="img" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14 w-full place-items-center text-center sm:text-left">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">About Us</h3>
              <p className="text-base text-gray-500 leading-relaxed max-w-xs">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-3">
                Quick Links
              </h3>
              <ul className="list-disc ms-4">
                <li className="text-base text-gray-500">
                  <a href="">Home</a>
                </li>
                <li className="text-base text-gray-500">
                  <a href="">Services</a>
                </li>
                <li className="text-base text-gray-500">
                  <a href="">About</a>
                </li>
                <li className="text-base text-gray-500">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-3">Subscribe</h3>
              <p className="text-base text-gray-500 leading-relaxed max-w-xs">
                Subscribe to our newsletter for the latest updates.
              </p>

              <div className="flex mt-3 max-w-xs">
                <input
                  className="py-3 px-3 border rounded-l-xl text-base text-gray-400 w-full"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="py-3 px-4 bg-gradient-to-r from-orange-500 to-pink-400 text-base font-bold text-white rounded-r-xl cursor-pointer"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-600 w-full" />

        <p className="py-8 text-center text-base text-gray-400">
          @2024 Your company All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
