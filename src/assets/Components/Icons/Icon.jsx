import React from 'react'
import LogoIcon from "../../images/logo.svg";
import TwitterIcon from '../../images/icons/twitter.svg'
import GithubIcon from '../../images/icons/github.svg'
import LinkedInIcon from '../../images/icons/linkedin.svg'

const icons = {
  logo: LogoIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon
};

const Icon = ({ name, className, onClick }) => {
  const icon = icons[name];
  if (!icon) return null;

  return <img src={icon} alt={name} className={className} onClick={onClick} />;
};

export default Icon
