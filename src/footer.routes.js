import MKTypography from "components/MKTypography";

import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Beji Kassar Atallah Avocats",
    image: logoCT,
    route: "/",
  },

  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Beji Kassar Atallah Avocats
    </MKTypography>
  ),
};
