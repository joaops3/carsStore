import React, { ReactComponentElement, ReactElement } from "react";
import { Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"


interface SideBarIconInterface {
  icon: ReactElement;
  children: string;
  href: string
}

const SideBarIcon: React.FC<SideBarIconInterface> = ({ icon, children, href }) => {
  return (
    <>
      <Row className={"p-3 py-3 sidebarIcon "}>
        <Col>
        <Link to={href} className="link-sidebar">
          <div className="d-flex align-items-center justify-content-end ">
            <span className={"p-2"}>{icon}</span>
            <span className="fs-6">{children}</span>
          </div>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default SideBarIcon;
