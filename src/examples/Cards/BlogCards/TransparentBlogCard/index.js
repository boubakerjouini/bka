// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// eslint-disable-next-line react/prop-types
function TransparentBlogCard({ image, title, description }) {
  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
        transition: "all 0.3s ease", // Ensure smooth transition
        "&:hover": {
          transform: "scale(1.05)", // Optional scaling effect on hover
        },
      }}
    >
      <MKBox position="relative" borderRadius="lg" overflow="hidden">
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          position="relative"
          zIndex={1}
          sx={{
            transition: "filter 0.3s ease", // Smooth transition for filter property
            filter: "blur(8px)", // Initial blur
            "&:hover": {
              filter: "blur(0px)", // Remove blur on hover
            },
          }}
        />
        <MKBox
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay to enhance text visibility
            transition: "background 0.3s ease", // Smooth transition for background
            "&:hover": {
              background: "rgba(0, 0, 0, 0)", // Remove overlay on hover
            },
          }}
        />
      </MKBox>
      <MKBox pt={2} pb={3}>
        <MKTypography variant="h5" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" component="p" color="text" mb={3}>
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

export default TransparentBlogCard;
