/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Link from "@mui/material/Link";
import post1 from "assets/images/Attalah.PNG";
import post2 from "assets/images/baccar.PNG";
import post3 from "assets/images/beji.PNG";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import MKButton from "components/MKButton";

function Places({ showBackButton }) {
  return (
    <>

      {showBackButton && (
        <Grid container justifyContent="flex-start" sx={{ mt: 4, ml: 4 }}>
          <Link href="/" underline="none">
            <MKButton>Back</MKButton>
          </Link>
        </Grid>
      )}
      <MKBox component="section" py={2}>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            // eslint-disable-next-line prettier/prettier
            sx={{ mx: "auto", textAlign: "center", pb: 5 }}
          >
            <MKTypography variant="h2">Our Team</MKTypography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TransparentBlogCard
                image={post1}
                title="Safia Atallah"
                description="satallah@bka.com.tn"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TransparentBlogCard
                image={post2}
                title="Melek Kassar"
                description="Mkassar@bka.com.tn"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TransparentBlogCard
                image={post3}
                title="Mohamed Khalil Béji"
                description="kbeji@bka.com.tn"
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>

  );
}

export default Places;
