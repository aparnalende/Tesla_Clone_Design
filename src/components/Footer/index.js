import React from "react";

import { Wrapper, Content } from "./footer.syle";

const Footer = ({ bottom }) => {
  return (
    <Wrapper>
      <Content className={bottom}>
        <div>
          <a href="" target="_blank">
            Tesla-Clone &copy; 2022
          </a>
        </div>
        <div>
          <a href="mailto:" target="_blank">
            Gmail
          </a>
          <a href="" target="_blank">
            LinkedIn
          </a>
          <a href="" target="_blank">
            GitHub
          </a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
