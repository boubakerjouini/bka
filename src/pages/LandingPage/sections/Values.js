/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Link } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information({ showBackButton }) {
  return (
    <>
      {showBackButton && (
        <Grid container justifyContent="flex-start" sx={{ mt: 4, ml: 4 }}>
          <Link href="/" underline="none">
            <MKButton>Back</MKButton>
          </Link>
        </Grid>
      )}
      <MKBox component="section" py={{ xs: 6, mt: 2 }}>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="h2">Our Values</MKTypography>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name="Innovation"
                review="Because law is a living and constantly evolving subject, our teams provide innovative
and relevant legal solutions to optimally meet the needs of our clients."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                color="info"
                name="Rigor"
                review="Because rigor is an inseparable value of the practice of the profession of lawyer, we
consider that any problem requires to be treated with the greatest attention in order
to provide an irreproachable work."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name="Commitment"
                review="Because our clients are entitled to expect the best from their lawyers and it is
important to never lose sight of our clients&#39; goals, we implement all our resources to
defend their interests."
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Information;
