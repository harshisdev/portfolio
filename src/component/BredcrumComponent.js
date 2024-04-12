import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BredcrumComponent = (props) => {
  return (
    <>
      <div className="bredcrum-custom">
        <Breadcrumb className="py-2 container">
          <Breadcrumb.Item linkAs="span">
            <Link to="/" className="nav-link">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{props.pageName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default BredcrumComponent;
