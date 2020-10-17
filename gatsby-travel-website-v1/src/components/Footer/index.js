import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa"
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
} from "./FooterElements"
const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            EXPLOR
          </SocialLogo>
          <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Facebook"
              rel="noopenner noreferrer"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopenner noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopenner noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Instagram"
              rel="noopenner noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Linkedin"
              rel="noopenner noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}
export default Footer
