/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
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
import React, { useRef, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import emailjs from "@emailjs/browser";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "@mui/material";

function Contact({showBackButton}) {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_twwyjio', 'template_pc5jg5m', form.current, 'K2cIO12TZBnQsfaFv')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setModalMessage('Email sent successfully!');
          setOpen(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setModalMessage('Failed to send email. Please try again.');
          setOpen(true);
        }
      );
  };

  return (
    <>
          {showBackButton && (
        <Grid container justifyContent="flex-start" sx={{ mt: 4, ml: 4 }}>
          <Link href="/" underline="none">
            <MKButton>Back</MKButton>
          </Link>
        </Grid>
      )}
      <MKBox component="section" py={{ xs: 0, lg: 6 }}>
        <Container>
          <Grid container item>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.631698124663!2d10.176088076132077!3d36.851295772232675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34af08114449%3A0x88ffa488957d56a1!2s23%20Rue%20Tarek%20Ibn%20Zied%2C%20Ariana!5e0!3m2!1sen!2stn!4v1720183309914!5m2!1sen!2stn"
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </MKBox>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <MKBox component="form" ref={form} p={2} method="post" onSubmit={sendEmail}>
                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                      <MKTypography variant="h2" mb={1}>
                        We&apos;d like to hear from you.
                      </MKTypography>
                    </MKBox>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label="My name is"
                            placeholder="Full Name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="user_name"
                            required
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label="Phone number"
                            placeholder="Phone Number"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="phone"
                            required
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label="Email"
                            placeholder="Your Email"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="user_email"
                            required
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label="Your message"
                            placeholder="I want to say that..."
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            multiline
                            rows={6}
                            name="message"
                            required
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        <MKButton type="submit" variant="gradient" color="info">
                          Send Message
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleIcon sx={{ color: "green", mr: 1, animation: "pop 0.5s ease-in-out" }} />
          {modalMessage}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
      <style jsx global>{`
        @keyframes pop {
          0% {
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default Contact;
