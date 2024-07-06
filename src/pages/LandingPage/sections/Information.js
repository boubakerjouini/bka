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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Our Practices</MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={4}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="corporate_fare"
                    title="CORPORATE / M&amp;A"
                    description="We advise clients on public and private M&amp;A, disposals, demergers, joint ventures,
restructurings, corporate governance and regulatory compliance."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="TAX"
                    description="We advise our clients on all taxation: tax aspects of restructuring and consolidation,
assistance during controls or obtaining tax approvals, criminal tax law, international
tax law, property taxation, corporate taxation, tax litigation."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="money"
                    title="BANKING &amp; FINANCE"
                    description="We advise banks, financial institutions, investment funds, insurance companies,
companies, in banking and financial law and capital markets."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="house"
                    title="REAL ESTATE"
                    description="We regularly advise a broad variety of clients, including listed and non-listed property
companies, Tunisian and international investment funds, insurance companies,
developers and occupants, as well as lending institutions."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="people_alt"
                    title="FAMILY LAW"
                    description="Family law is the legal branch that governs relationships between spouses, between
parents, children and grandchildren, whether they are biological or adopted, we
intervene in all situations related to family law (divorce , alimony, division of property,
succession ...). We also offer mediation procedures in family law."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="security"
                    title="LITIGATIONS / ARBITRATION / MEDIATION"
                    description="We represent our clients in civil cases and commercial disputes before all
jurisdictions
We analyze issues and drafts mediation and arbitration clauses in international joint
venture and other financial and commercial agreements. We advise on business
decisions and plans that pose arbitration and litigation risks, and we represent clients
in arbitration, mediation and other alternative dispute resolution proceedings."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
