/* eslint-disable prettier/prettier */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/balance.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.light.main, 0.8),
            rgba(gradients.light.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="#34476" fontWeight="bold">
            Our story is the story…{" "}
          </MKTypography>
          <MKTypography variant="h" color="#34476" mb={1}>
            Of the love of the law<br />
            Of an innovative vision of the law<br />
            Of the aspiration to give the best<br />
            Of the desire to break the codes<br />
            Of the search for the unprecedented<br />
            Of the importance of people and the culture of diversity<br />
            Of infallibility in the face of adversity<br />
            Of achieving excellence<br />
          </MKTypography>
          <MKTypography variant="body1" color="#34476" opacity={0.8} mb={2}>
            Our history is that of a firm, a partner, a pillar, which gives each of its clients all
            the excellence, rigor, professionalism, flexibility and empathy that they expect from
            us.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
