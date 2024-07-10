/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import emailjs from "@emailjs/browser";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "@mui/material";

function Contact({ showBackButton }) {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs.sendForm('service_twwyjio', 'template_pc5jg5m', form.current, 'K2cIO12TZBnQsfaFv')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  if (emailSent) {
    return (
      <MKBox display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
        <CheckCircleIcon sx={{ color: "green", fontSize: 60, mb: 2 }} />
        <MKTypography variant="h4" mb={2}>
          Email sent successfully!
        </MKTypography>
        <Link href="/contact" underline="none">
          <MKButton>Resend a message</MKButton>
        </Link>
      </MKBox>
    );
  }

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
                    justifyContent:"center",
                    alignItems:"center",
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
                  <MKBox component="form" ref={form} p={2} method="post" onSubmit={handleSubmit(sendEmail)}>
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
                            {...register("user_name", { required: "Full name is required" })}
                            error={!!errors.user_name}
                            helperText={errors.user_name?.message}
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
                            {...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
                                message: "Invalid phone number",
                              },
                            })}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
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
                            {...register("user_email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                message: "Invalid email address",
                              },
                            })}
                            error={!!errors.user_email}
                            helperText={errors.user_email?.message}
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
                            {...register("message", { required: "Message is required" })}
                            error={!!errors.message}
                            helperText={errors.message?.message}
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
                        <MKButton type="submit" outlined>
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
    </>
  );
}

export default Contact;
