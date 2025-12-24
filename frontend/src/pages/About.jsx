import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// Header/Footer ke same colors
const colors = {
    bgHeader: "#0f172a",
    bgDrawer: "#020617",
    border: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea"
};

const primaryGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const features = [
    {
        icon: VerifiedIcon,
        title: "Verified Sources",
        description: "Every article is fact-checked and sourced from trusted publications.",
        color: "#4ade80",
        bg: "rgba(34,197,94,0.15)"
    },
    {
        icon: SpeedIcon,
        title: "Real-Time Updates",
        description: "Get breaking news as it happens with our lightning-fast delivery system.",
        color: "#facc15",
        bg: "rgba(234,179,8,0.15)"
    },
    {
        icon: PublicIcon,
        title: "Global Coverage",
        description: "News from every corner of the world, available in multiple languages.",
        color: "#38bdf8",
        bg: "rgba(56,189,248,0.15)"
    },
    {
        icon: SecurityIcon,
        title: "Privacy First",
        description: "Your data is secure. We never sell your information to third parties.",
        color: "#f472b6",
        bg: "rgba(244,114,182,0.15)"
    },
    {
        icon: GroupsIcon,
        title: "Community Driven",
        description: "Join thousands of readers who trust CheckNews for their daily updates.",
        color: colors.accent,
        bg: "rgba(102,126,234,0.15)"
    },
    {
        icon: TrendingUpIcon,
        title: "Smart Curation",
        description: "AI-powered recommendations based on your interests and reading habits.",
        color: "#fb923c",
        bg: "rgba(251,146,60,0.15)"
    }
];

const stats = [
    { value: "1M+", label: "Active Readers" },
    { value: "50K+", label: "Articles Published" },
    { value: "100+", label: "News Sources" },
    { value: "24/7", label: "Live Coverage" }
];

const About = () => {
    return (
        <Box sx={{ background: colors.bgDrawer, minHeight: "100vh" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: `linear-gradient(180deg, ${colors.bgHeader} 0%, ${colors.bgDrawer} 100%)`,
                    borderBottom: `1px solid ${colors.border}`,
                    py: { xs: 8, sm: 10, md: 15 },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "-10%", md: "-20%" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: { xs: "300px", md: "600px" },
                        height: { xs: "300px", md: "600px" },
                        borderRadius: "50%",
                        background: primaryGradient,
                        opacity: 0.1,
                        filter: "blur(80px)",
                    }}
                />

                <Container maxWidth="lg" sx={{ position: "relative", px: { xs: 2, sm: 3 } }}>
                    <Box sx={{ textAlign: "center" }}> {/* Fixed: Centered for all screens */}
                        <Typography
                            variant="overline"
                            sx={{
                                color: colors.accent,
                                fontWeight: 700,
                                letterSpacing: 2,
                                mb: 2,
                                display: "block"
                            }}
                        >
                            About Us
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
                                fontWeight: 900,
                                background: primaryGradient,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                mb: 3,
                                lineHeight: 1.1,
                            }}
                        >
                            Trusted news for
                            <br />
                            informed decisions
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                color: colors.textSecondary,
                                maxWidth: 800,
                                lineHeight: 1.7,
                                mx: "auto", // Center the box itself
                                textAlign: "center"
                            }}
                        >
                            CheckNews was founded with a simple mission: to deliver accurate, unbiased,
                            and timely news to readers worldwide. We believe that access to quality
                            journalism is a fundamental right in the digital age.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container maxWidth="lg" sx={{
                py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3 }
            }}>
                <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
                    {stats.map((stat, index) => (
                        <Grid item xs={6} sm={6} md={3} key={index}>
                            <Paper
                                sx={{
                                    background: colors.bgHeader,
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: { xs: 2, md: 3 },
                                    p: { xs: 3, sm: 3, md: 4 },
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                    height: "100%",
                                    width:220,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    "&:hover": {
                                        transform: { md: "translateY(-5px)" },
                                        borderColor: colors.accent,
                                        boxShadow: `0 10px 30px rgba(102,126,234,0.2)`,
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
                                        fontWeight: 900,
                                        background: primaryGradient,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        mb: { xs: 0.5, md: 1 },
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography sx={{
                                    color: colors.textSecondary,
                                    fontSize: { xs: "12px", sm: "14px", md: "15px" },
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    letterSpacing: 1
                                }}>
                                    {stat.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
                <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                            fontWeight: 800,
                            color: colors.textPrimary,
                            mb: 2,
                        }}
                    >
                        Why Choose CheckNews?
                    </Typography>
                    <Typography
                        sx={{
                            color: colors.textSecondary,
                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                            maxWidth: 600,
                            mx: "auto"
                        }}
                    >
                        Everything you need to stay informed in the modern world.
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 3, sm: 3, md: 4 }} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    maxWidth: { xs: "100%", sm: 360 },
                                    mx: "auto",
                                    background: colors.bgHeader,
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: { xs: 3, md: 4 },
                                    p: { xs: 3.5, sm: 4 },
                                    textAlign: "center", // Fixed: Center text inside card
                                    transition: "all 0.3s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center", // Fixed: Center items horizontally
                                    "&:hover": {
                                        transform: { md: "translateY(-8px)" },
                                        borderColor: feature.color,
                                        boxShadow: `0 15px 35px ${feature.bg}`,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "16px",
                                        background: feature.bg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 3,
                                    }}
                                >
                                    <feature.icon sx={{
                                        color: feature.color,
                                        fontSize: 32
                                    }} />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.25rem",
                                        fontWeight: 700,
                                        color: colors.textPrimary,
                                        mb: 2,
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography sx={{
                                    color: colors.textSecondary,
                                    lineHeight: 1.7,
                                    fontSize: "1rem"
                                }}>
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Mission Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 } }}>
                <Paper
                    sx={{
                        background: `linear-gradient(135deg, ${colors.bgHeader} 0%, rgba(102,126,234,0.05) 100%)`,
                        border: `1px solid ${colors.border}`,
                        borderRadius: { xs: 4, md: 6 },
                        p: { xs: 4, sm: 6, md: 8 },
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
                            fontWeight: 800,
                            color: colors.textPrimary,
                            mb: 3,
                        }}
                    >
                        Our Mission
                    </Typography>
                    <Typography
                        sx={{
                            color: colors.textSecondary,
                            fontSize: { xs: "1.05rem", sm: "1.1rem", md: "1.2rem" },
                            lineHeight: 1.8,
                            maxWidth: 850,
                            mx: "auto",
                        }}
                    >
                        We're committed to delivering news that empowers you to make informed decisions.
                        In an era of misinformation, we stand as a beacon of truth, accuracy, and transparency.
                        Our team of dedicated journalists and editors work around the clock to bring you
                        stories that matter, from every corner of the globe.
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
};

export default About;