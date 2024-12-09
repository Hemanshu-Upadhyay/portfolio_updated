const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a className="hover:text-white cursor-pointer">Terms & Conditions</a>
        <p>|</p>
        <a className="hover:text-white cursor-pointer">Privacy Policy</a>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Hemanshu-Upadhyay"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://x.com/Hemanshu0412"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/twitter.svg" alt="twitter" />
          </a>
        </div>
        <div className="social-icon ">
          <a
            href="https://www.linkedin.com/in/hemanshu-upadhyay-41957b1a8/"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/linkedIn.svg" alt="instagram" />
          </a>
        </div>
      </div>

      <p className="text-white-500 hover:text-white cursor-pointer">
        © 2024 Hemanshu Upadhyay. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
