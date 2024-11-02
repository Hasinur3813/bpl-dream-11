import newsletter from "../assets/newsletter-bg.png";
const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-2">
        <div
          style={{ backgroundImage: `url(${newsletter})` }}
          className="-mb-56 relative z-10 py-10 px-4 sm:px-6 md:px-8 lg:py-20 rounded-3xl bg- bg-center bg-[length:100%_100%] bg-no-repeat flex justify-center items-center border"
        >
          <div className="text-center space-y-5 max-w-md md:max-w-lg lg:max-w-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-500">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                className="w-full sm:w-auto border rounded-xl px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="w-full sm:w-auto px-7 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-sm sm:text-base font-bold cursor-pointer"
                type="submit"
                value="Subscribe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
