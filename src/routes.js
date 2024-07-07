import Icon from "@mui/material/Icon";
import Information from "pages/LandingPage/sections/Practices";
import Places from "pages/LandingPage/sections/Team";
import Contact from "pages/LandingPage/sections/Contact";
import Testimonials from "pages/LandingPage/sections/Values";

const routes = [
  {
    name: "Our Practices",
    icon: <Icon>info</Icon>,
    route: "/our-practices",
    component: <Information isHidden={true} showBackButton={true} />,
  },
  {
    name: "Our Team",
    icon: <Icon>location_on</Icon>,
    route: "/our-team",
    component: <Places showBackButton={true} />,
  },
  {
    name: "Our Values",
    icon: <Icon>star</Icon>,
    route: "/our-values",
    component: <Testimonials showBackButton={true} />,
  },
  {
    name: "Contact Us",
    icon: <Icon>mail</Icon>,
    route: "/contact-us",
    component: <Contact showBackButton={true} />,
  },
];

export default routes;
