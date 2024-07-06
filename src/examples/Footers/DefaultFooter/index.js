// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, copyright } = content;

  const phoneNumbers = ["+216 71 799 089", "+216 31 799 089", "+216 71 799 712"];

  const email = "contact@bka.com.tn";

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sx={{ mb: 3 }}>
            <MKBox display="flex" justifyContent="space-between" alignItems="center">
              <MKBox display="flex" alignItems="center">
                <Link to={brand.route}>
                  <MKBox
                    component="img"
                    src={brand.image}
                    alt={brand.name}
                    maxWidth="2rem"
                    mr={2}
                  />
                </Link>
                <MKTypography variant="h6">{brand.name}</MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" flexWrap="wrap">
                {phoneNumbers.map((number, index) => (
                  <MKBox display="flex" alignItems="center" mr={2} key={index}>
                    <Icon sx={{ mr: 1 }}>phone</Icon>
                    <MKTypography variant="body1">{number}</MKTypography>
                  </MKBox>
                ))}
                <MKBox display="flex" alignItems="center">
                  <Icon sx={{ mr: 1 }}>email</Icon>
                  <MKTypography variant="body1">{email}</MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
