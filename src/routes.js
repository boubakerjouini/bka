/* eslint-disable prettier/prettier */
import Icon from "@mui/material/Icon";
import Information from "pages/LandingPage/sections/Practices";
import Places from "pages/LandingPage/sections/Team";
import Contact from "pages/LandingPage/sections/Contact";
import Testimonials from "pages/LandingPage/sections/Values";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const routes = [
  {
    name: "Our Practices",
    icon: <Icon>support</Icon>,
    route: "/our-practices",
    component: <Information isHidden={true} showBackButton={true} />,
  },
  {
    name: "Our Team",
    icon: <Icon>people</Icon>,
    route: "/our-team",
    component: <Places showBackButton={true} />,
  },
  {
    name: "Our Values",
    icon: <Icon>verified</Icon>,
    route: "/our-values",
    component: <Testimonials showBackButton={true} />,
  },
  {
    name: "Contact Us",
    icon: <Icon>mail</Icon>,
    route: "/contact-us",
    component: <Contact showBackButton={true} />,
  },
  {
    name: "",
    icon: <LanguageRoundedIcon />,
    route: "/internationalization",
    component: <div>Internationalization Component</div>,
  },
];

export default routes;
