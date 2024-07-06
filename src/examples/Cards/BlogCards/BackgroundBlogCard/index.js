// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// eslint-disable-next-line react/prop-types
function BackgroundBlogCard({ image, title, description }) {
  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <MKBox p={3}>
        <MKBox minHeight="20.625rem" my="auto" py={3}>
          <MKTypography
            variant="h2"
            color="white"
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {title}
          </MKTypography>
          <MKTypography variant="body2" color="white" my={3}>
            {description}
          </MKTypography>
        </MKBox>
      </MKBox>
    </Card>
  );
}

export default BackgroundBlogCard;
