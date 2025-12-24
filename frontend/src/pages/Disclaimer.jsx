import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { Warning } from "@mui/icons-material";

const colors = {
    bgPrimary: "#0f172a",
    bgSecondary: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea",
    border: "#334155",
};

const Disclaimer = () => {
    const sections = [
        {
            title: "General Information",
            content: [
                "The information provided by CheckNews is for general informational and educational purposes only. All content on this website is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.",
                "Under no circumstance shall we have any liability to you for any loss or damage incurred as a result of the use of the website or reliance on any information provided on the site. Your use of the website and reliance on any information is solely at your own risk."
            ]
        },
        {
            title: "No Professional Advice",
            content: [
                "The content on CheckNews does not constitute professional advice. Whether legal, financial, medical, or otherwise, the information provided should not be used as a substitute for consultation with professional advisors.",
                "If you require specific advice related to any matter, you should consult an appropriate professional advisor. Do not disregard professional advice or delay seeking it because of something you have read on CheckNews."
            ]
        },
        {
            title: "Accuracy and Completeness",
            content: [
                "While we strive to provide accurate and up-to-date information, CheckNews makes no guarantees about the completeness, reliability, or accuracy of the content. Articles, news, and information may contain inaccuracies or typographical errors.",
                "We reserve the right to make additions, deletions, or modifications to the content at any time without prior notice. We do not guarantee that the website will be free from errors or that any defects will be corrected."
            ]
        },
        {
            title: "External Links Disclaimer",
            content: [
                "CheckNews may contain links to external websites that are not provided or maintained by us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
                "The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We have no control over the nature, content, and availability of those sites."
            ]
        },
        {
            title: "Editorial Content",
            content: [
                "The views and opinions expressed in articles, comments, and other content on CheckNews are those of the authors and contributors and do not necessarily reflect the official policy or position of CheckNews.",
                "We do not assume responsibility for the opinions, views, or information presented by contributors, guest authors, or commenters. All content is subject to editorial review but may not represent the views of CheckNews management."
            ]
        },
        {
            title: "Fact-Checking and Verification",
            content: [
                "While CheckNews strives to verify information and fact-check content before publication, we cannot guarantee that all information is completely accurate or free from errors. News and information can change rapidly, and content may become outdated.",
                "We encourage readers to verify important information through multiple sources and conduct their own research before making decisions based on content found on our website."
            ]
        },
        {
            title: "No Endorsement",
            content: [
                "Reference to any products, services, processes, or other information by trade name, trademark, manufacturer, supplier, or otherwise does not constitute or imply endorsement, sponsorship, or recommendation by CheckNews.",
                "Any commercial content or advertisements on the website are clearly marked as such and do not represent endorsements by CheckNews unless explicitly stated."
            ]
        },
        {
            title: "Changes and Updates",
            content: [
                "Information on CheckNews may be changed or updated without notice. We may also make improvements or changes to the website at any time.",
                "Past content may not reflect current views, practices, or developments. Archived articles remain available for reference purposes but may contain outdated information."
            ]
        },
        {
            title: "Limitation of Liability",
            content: [
                "To the maximum extent permitted by law, CheckNews shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the website.",
                "This includes but is not limited to damages for loss of profits, data, or other intangible losses resulting from the use or inability to use the website or any content therein."
            ]
        },
        {
            title: "Fair Use and Copyright",
            content: [
                "CheckNews respects intellectual property rights. We make every effort to properly attribute sources and comply with fair use principles when quoting or referencing external content.",
                "If you believe any content on our website infringes your copyright, please contact us immediately so we can address the matter appropriately."
            ]
        },
        {
            title: "Contact Us",
            content: [
                "If you have any questions or concerns about this Disclaimer, or if you notice any errors or inaccuracies in our content, please contact us through our Contact page or email us at info@checknews.com."
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
                        <Warning sx={{ fontSize: 32, color: "#fff" }} />
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
                        Disclaimer
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
                        This Disclaimer governs your use of CheckNews. By using our website, you accept this disclaimer
                        in full. If you disagree with any part of this disclaimer, you must not use our website. The
                        information contained on CheckNews is provided for informational purposes only and should be
                        used at your own risk.
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
                        By using CheckNews, you acknowledge that you have read and understood this Disclaimer.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Disclaimer;