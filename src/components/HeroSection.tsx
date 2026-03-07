
export const HeroSection = () => {
  const scrollToAbout = () => {
    window.location.href = '/about';
  };
  const scrollToCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="text-gray-900 dark:text-white">Kartik </span>
          <span className="text-gray-900 dark:text-white">Bhalerao</span>
        </h1>

        {/* Role + Status */}
        <div className="flex flex-col items-center gap-4">

          {/* PM Tag */}
          <span className="px-6 py-2.5 text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 rounded-lg bg-blue-50 dark:bg-blue-950/50 shadow-sm">
            Product Manager
          </span>

        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="text-gray-800 dark:text-gray-200 font-medium">Crafting Products That </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
            People Actually Love
          </span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-3">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kartik-bhalerao"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:border-[#0A66C2] hover:bg-[#0A66C2] transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2] group-hover:fill-white transition-colors duration-200">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@kartikbhalerao948"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:border-gray-900 hover:bg-gray-900 dark:hover:border-white dark:hover:bg-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-gray-900 dark:fill-white group-hover:fill-white dark:group-hover:fill-gray-900 transition-colors duration-200">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kartikbh6614"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:border-gray-900 hover:bg-gray-900 dark:hover:border-white dark:hover:bg-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-gray-900 dark:fill-white group-hover:fill-white dark:group-hover:fill-gray-900 transition-colors duration-200">
              <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd"/>
            </svg>
          </a>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">

          <button
            onClick={scrollToAbout}
            className="px-8 py-3 rounded-xl font-semibold text-base cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200"
          >
            About Me
          </button>

          <button
            onClick={scrollToCaseStudies}
            className="px-8 py-3 rounded-xl font-semibold text-base cursor-pointer border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-colors duration-200"
          >
            View My Builds
          </button>

        </div>

      </div>
    </section>
  );
};
