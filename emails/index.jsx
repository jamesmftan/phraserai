import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

export const Email = ({ otpCode }) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={appNameSection}>PhraserAI</Section>
            <Section style={upperSection}>
              <Heading style={h1}>OTP Reset Password</Heading>
              <Text style={verifyText}>OTP Code</Text>
              <Text style={codeText}>{otpCode}</Text>
            </Section>
            <Hr />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                PhraserAI will never email you and ask you to disclose or verify
                your password, credit card, or banking account number. Please be
                cautious of any emails requesting this information, as they may
                be phishing attempts to gain unauthorized access to your
                personal data.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was produced and distributed by PhraserAI. All rights
            reserved. No part of this message may be reproduced, distributed, or
            transmitted in any form or by any means, including photocopying,
            recording, or other electronic or mechanical methods, without the
            prior written permission of PhraserAI, except in the case of brief
            quotations embodied in critical reviews and certain other
            noncommercial uses permitted by copyright law. For permission
            requests, email PhraserAI at phraserai@gmail.com.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
  textAlign: "center",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const appNameSection = {
  backgroundColor: "#172554",
  padding: "20px 0",
  color: "white",
  fontSize: "30px",
  textAlign: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center",
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center",
};

const cautionText = { ...text, margin: "0px" };
