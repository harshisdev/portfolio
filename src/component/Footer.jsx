const Footer = () => {
  return (
    <>
      <footer>
        <div className="py-2 container">
          <div className="row">
            <div className="col-7 d-flex">
              © 2023 - {(new Date().getFullYear())}. All Right Reserved
            </div>
            <div className="col-5 d-flex justify-content-end">
              Made with 💛 Harsh
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
