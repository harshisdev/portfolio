const Footer = () => {
  return (
    <>
      <footer>
        <div className="py-3 container">
          <div className="row">
            <div className="col-12 col-sm-7 text-center text-sm-start">
              © 2023 - {(new Date().getFullYear())}. All Right Reserved
            </div>
            <div className="col-12 col-sm-5 text-center text-sm-end mt-2 mt-sm-0">
              Made with ❤️ Harsh
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
