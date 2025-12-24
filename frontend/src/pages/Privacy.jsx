import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { Shield } from "@mui/icons-material";

const colors = {
    bgPrimary: "#0f172a",
    bgSecondary: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea",
    border: "#334155",
};

const Privacy = () => {
    const sections = [
        {
            title: "Information We Collect",
            content: [
                "When you visit CheckNews, we may collect certain information automatically, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information helps us understand how visitors use our site and improve our services.",
                "If you subscribe to our newsletter or contact us through our forms, we collect the personal information you provide, such as your name and email address. We only collect information that you voluntarily submit to us."
            ]
        },
        {
            title: "How We Use Your Information",
            content: [
                "We use the information we collect to operate and maintain our website, send you newsletters and updates if you've subscribed, respond to your comments and questions, analyze site usage and improve our content, and protect against fraudulent or unauthorized activity.",
                "We will never sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent."
            ]
        },
        {
            title: "Cookies and Tracking Technologies",
            content: [
                "CheckNews uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our site.",
                "You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of our website."
            ]
        },
        {
            title: "Third-Party Services",
            content: [
                "Our website may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.",
                "We may use third-party analytics services to help us understand how our site is being used. These services may collect information sent by your browser as part of a web page request."
            ]
        },
        {
            title: "Data Security",
            content: [
                "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.",
                "While we strive to protect your personal information, we cannot guarantee its absolute security. You acknowledge that you provide your information at your own risk."
            ]
        },
        {
            title: "Your Rights",
            content: [
                "You have the right to access, update, or delete the personal information we hold about you. If you wish to exercise these rights, please contact us using the information provided below.",
                "You may unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email we send or by contacting us directly."
            ]
        },
        {
            title: "Children's Privacy",
            content: [
                "CheckNews is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately."
            ]
        },
        {
            title: "Changes to This Policy",
            content: [
                "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.",
                "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information."
            ]
        },
        {
            title: "Contact Us",
            content: [
                "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us through our Contact page or email us at privacy@checknews.com."
            ]
        }
    ];

    return (
        <Box sx={{ backgroundColor: colors.bgPrimary, minHeight: "100vh", py: 8 }}>
            <Container maxWidth="md">
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: 3,
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            mb: 3,
                        }}
                    >
                        <Shield sx={{ fontSize: 32, color: "#fff" }} />
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{
                            color: colors.textPrimary,
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: "2rem", md: "2.5rem" },
                        }}
                    >
                        Privacy Policy
                    </Typography>
                    <Typography sx={{ color: colors.textSecondary, fontSize: "1rem" }}>
                        Last updated: December 20, 2025
                    </Typography>
                </Box>

                {/* Introduction */}
                <Box
                    sx={{
                        backgroundColor: colors.bgSecondary,
                        borderRadius: 2,
                        p: 4,
                        mb: 4,
                        border: `1px solid ${colors.border}`,
                    }}
                >
                    <Typography sx={{ color: colors.textPrimary, lineHeight: 1.8 }}>
                        At CheckNews, we respect your privacy and are committed to protecting your personal information.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                        you visit our website. Please read this policy carefully to understand our practices regarding
                        your personal data.
                    </Typography>
                </Box>

                {/* Sections */}
                {sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: colors.accent,
                                fontWeight: 700,
                                mb: 2,
                                fontSize: { xs: "1.25rem", md: "1.5rem" },
                            }}
                        >
                            {index + 1}. {section.title}
                        </Typography>
                        {section.content.map((paragraph, pIndex) => (
                            <Typography
                                key={pIndex}
                                sx={{
                                    color: colors.textSecondary,
                                    lineHeight: 1.8,
                                    mb: 2,
                                }}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                        {index < sections.length - 1 && (
                            <Divider sx={{ mt: 3, borderColor: colors.border }} />
                        )}
                    </Box>
                ))}

                {/* Footer Note */}
                <Box
                    sx={{
                        mt: 6,
                        p: 3,
                        backgroundColor: colors.bgSecondary,
                        borderRadius: 2,
                        border: `1px solid ${colors.border}`,
                        textAlign: "center",
                    }}
                >
                    <Typography sx={{ color: colors.textSecondary, fontSize: "0.875rem" }}>
                        By using CheckNews, you consent to the terms of this Privacy Policy.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Privacy;