import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { Gavel } from "@mui/icons-material";

const colors = {
    bgPrimary: "#0f172a",
    bgSecondary: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea",
    border: "#334155",
};

const Terms = () => {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: [
                "By accessing and using CheckNews, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our website.",
                "We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms."
            ]
        },
        {
            title: "Use of Website",
            content: [
                "You may use CheckNews for lawful purposes only. You agree not to use the website in any way that violates any applicable federal, state, local, or international law or regulation.",
                "You agree not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm CheckNews or users of the website."
            ]
        },
        {
            title: "Intellectual Property Rights",
            content: [
                "All content on CheckNews, including but not limited to text, graphics, logos, images, articles, and software, is the property of CheckNews or its content suppliers and is protected by intellectual property laws.",
                "You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any of the material on our website without prior written consent, except for personal, non-commercial use."
            ]
        },
        {
            title: "User Content and Comments",
            content: [
                "If we enable commenting or user submissions on CheckNews, you retain ownership of any content you submit. However, by posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.",
                "You are solely responsible for the content you post. You agree not to post content that is defamatory, obscene, threatening, invasive of privacy, infringing of intellectual property rights, or otherwise objectionable."
            ]
        },
        {
            title: "Third-Party Links",
            content: [
                "CheckNews may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.",
                "You acknowledge and agree that CheckNews shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services available through such websites."
            ]
        },
        {
            title: "Disclaimer of Warranties",
            content: [
                "CheckNews is provided on an 'as is' and 'as available' basis. We make no warranties, expressed or implied, regarding the website's operation or the information, content, or materials included on the website.",
                "We do not warrant that the website will be uninterrupted, secure, or error-free. We do not warrant the accuracy, completeness, or usefulness of any information on the website."
            ]
        },
        {
            title: "Limitation of Liability",
            content: [
                "To the fullest extent permitted by applicable law, CheckNews shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.",
                "This includes but is not limited to damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages."
            ]
        },
        {
            title: "Indemnification",
            content: [
                "You agree to defend, indemnify, and hold harmless CheckNews and its affiliates from any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the website, your violation of these Terms, or your violation of any third-party rights."
            ]
        },
        {
            title: "Termination",
            content: [
                "We reserve the right to terminate or suspend your access to CheckNews immediately, without prior notice or liability, for any reason, including breach of these Terms of Service.",
                "All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability."
            ]
        },
        {
            title: "Governing Law",
            content: [
                "These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.",
                "Any disputes arising from these Terms or your use of CheckNews shall be resolved in the appropriate courts."
            ]
        },
        {
            title: "Contact Information",
            content: [
                "If you have any questions about these Terms of Service, please contact us through our Contact page or email us at legal@checknews.com."
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
                        <Gavel sx={{ fontSize: 32, color: "#fff" }} />
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
                        Terms of Service
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
                        Welcome to CheckNews. These Terms of Service govern your use of our website and services.
                        By accessing or using CheckNews, you agree to be bound by these terms. Please read them
                        carefully before using our platform.
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
                        These terms constitute a legally binding agreement between you and CheckNews.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Terms;