import React from "react";
import styled from "styled-components";
// Data
// Icons
import { Icon } from "@iconify/react";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {


  return (
    <StyledSocialLinks>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://twitter.com/Shinizuru"}
        aria-label="Check out my Twitter profile."
        className="link-icons"
      >
        <Icon icon="logos:twitter" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://ko-fi.com/shinizuru"}
        aria-label="Check out my Ko-fi profile."
        className="link-icons"
      >
        <Icon icon="simple-icons:ko-fi" />
      </a>
    </StyledSocialLinks>
  );
}
