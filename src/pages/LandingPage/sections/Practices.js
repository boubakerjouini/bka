/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKButton from "components/MKButton";

function truncateText(text, length, isHidden) {
  if (!isHidden && text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
}

function Information({ isHidden, showBackButton }) {
  const practices = [
    {
      icon: "corporate_fare",
      title: "CORPORATE / M&A",
      description: "We advise clients on public and private M&A, disposals, demergers, joint ventures, restructurings, corporate governance and regulatory compliance."
    },
    {
      icon: "payments",
      title: "TAX",
      description: "We advise our clients on all taxation: tax aspects of restructuring and consolidation, assistance during controls or obtaining tax approvals, criminal tax law, international tax law, property taxation, corporate taxation, tax litigation."
    },
    {
      icon: "money",
      title: "BANKING & FINANCE",
      description: "We advise banks, financial institutions, investment funds, insurance companies, companies, in banking and financial law and capital markets."
    },
    {
      icon: "house",
      title: "REAL ESTATE",
      description: "We regularly advise a broad variety of clients, including listed and non-listed property companies, Tunisian and international investment funds, insurance companies, developers and occupants, as well as lending institutions."
    },
    {
      icon: "people_alt",
      title: "FAMILY LAW",
      description: "Family law is the legal branch that governs relationships between spouses, between parents, children and grandchildren, whether they are biological or adopted, we intervene in all situations related to family law (divorce , alimony, division of property, succession ...). We also offer mediation procedures in family law."
    },
    {
      icon: "security",
      title: "LITIGATIONS / ARBITRATION / MEDIATION",
      description: "We represent our clients in civil cases and commercial disputes before all jurisdictions. We analyze issues and drafts mediation and arbitration clauses in international joint venture and other financial and commercial agreements. We advise on business decisions and plans that pose arbitration and litigation risks, and we represent clients in arbitration, mediation and other alternative dispute resolution proceedings."
    },
  ];

  return (
    <>

      {showBackButton && (
        <Grid container justifyContent="flex-start" sx={{ mt: 4, ml: 4 }}>
          <Link href="/" underline="none">
            <MKButton>Back</MKButton>
          </Link>
        </Grid>
      )}        <MKBox component="section" py={{ xs: 6, md: 8 }}>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center", pb: 5 }}
          >
            <MKTypography variant="h2">Our Practices</MKTypography>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={12}>
              <Grid container justifyContent="flex-start">
                {practices.map((practice, index) => (
                  <Grid item xs={12} md={4} key={index} sx={{ pb: 8 }}>
                    <MKBox mb={{ xs: 5, md: 0 }}>
                      <DefaultInfoCard
                        icon={practice.icon}
                        title={practice.title}

                        description={<>
                          {truncateText(
                            practice.description,
                            100,
                            isHidden
                          )}
                          {!isHidden && (
                            <Link
                              href="/our-practices"
                              color="rgb(26, 115, 232)"
                              style={{
                                fontWeight: "bold",
                                display: "block",
                                marginTop: 10,
                              }}
                            >
                              Read More{" "}
                              <ArrowForwardIcon
                                style={{
                                  fontSize: 18,
                                  verticalAlign: "middle",
                                  marginLeft: 5,
                                }} />
                            </Link>
                          )}
                        </>} />
                    </MKBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox></>
  );
}

export default Information;
