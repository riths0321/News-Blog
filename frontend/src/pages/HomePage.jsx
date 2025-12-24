import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Box,
    Chip,
} from "@mui/material";
import HeroSection from "../components/HeroSection";
import CategoryTabs from "../components/CategoryTabs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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

// normalize helper
const normalize = (value = "") =>
    value.toString().trim().toLowerCase();

const HomePage = ({ articles = [] }) => {
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState("For you");
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        if (!articles.length) {
            setFilteredArticles([]);
            return;
        }

        // FOR YOU → show all
        if (normalize(activeCategory) === "for you") {
            setFilteredArticles(articles);
            return;
        }

        const selected = normalize(activeCategory);

        const filtered = articles.filter((article) =>
            normalize(article.category) === selected
        );

        setFilteredArticles(filtered);
    }, [activeCategory, articles]);

    return (
        <Box sx={{ background: colors.bgDrawer, minHeight: "100vh" }}>
            <HeroSection />

            {/* CATEGORY TABS */}
            <CategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* NEWS FEED */}
            <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
                <Typography
                    sx={{
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        mb: 4,
                        color: colors.textPrimary,
                    }}
                >
                    {activeCategory}
                </Typography>

                <Grid container spacing={3}>
                    {filteredArticles.length === 0 ? (
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    py: 8,
                                    px: 3,
                                    borderRadius: 3,
                                    background: colors.bgHeader,
                                    border: `1px solid ${colors.border}`,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: colors.textSecondary,
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    No articles available for this category.
                                </Typography>
                            </Box>
                        </Grid>
                    ) : (
                        filteredArticles.map((article) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={article.id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        width: "100%",
                                        maxWidth: 560,
                                        display: "flex",
                                        flexDirection: "column",
                                        cursor: "pointer",
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        background: colors.bgHeader,
                                        border: `1px solid ${colors.border}`,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            borderColor: colors.accent,
                                            boxShadow: `0 20px 40px rgba(102,126,234,0.2)`,
                                        },
                                    }}
                                    onClick={() => navigate(`/article/${article.id}`)}
                                >
                                    {article.image && (
                                        <CardMedia
                                            component="img"
                                            image={article.image}
                                            alt={article.title}
                                            sx={{
                                                height: 220,
                                                objectFit: "cover",
                                                flexShrink: 0,
                                            }}
                                        />
                                    )}

                                    <CardContent
                                        sx={{
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            p: 3,
                                        }}
                                    >
                                        {/* Category Badge */}
                                        <Chip
                                            label={article.category}
                                            size="small"
                                            sx={{
                                                alignSelf: "flex-start",
                                                mb: 2,
                                                background: "rgba(102,126,234,0.15)",
                                                color: colors.accent,
                                                fontWeight: 700,
                                                fontSize: "11px",
                                                letterSpacing: 0.5,
                                                textTransform: "uppercase",
                                                border: `1px solid rgba(102,126,234,0.3)`,
                                            }}
                                        />

                                        {/* Title */}
                                        <Typography
                                            sx={{
                                                fontSize: "1.25rem",
                                                fontWeight: 700,
                                                color: colors.textPrimary,
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                mb: 1.5,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {article.title}
                                        </Typography>

                                        {/* Subtitle/Description */}
                                        <Typography
                                            sx={{
                                                color: colors.textSecondary,
                                                fontSize: "14px",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                mb: 3,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {article.subtitle || article.content?.slice(0, 120) + "..."}
                                        </Typography>

                                        {/* Author & Read Time */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                mt: "auto",
                                                pt: 2.5,
                                                borderTop: `1px solid ${colors.border}`,
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={article.author.avatar}
                                                alt={article.author.name}
                                                sx={{
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    border: `2px solid ${colors.border}`,
                                                }}
                                            />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: "13px",
                                                        fontWeight: 600,
                                                        color: colors.textPrimary,
                                                        mb: 0.25,
                                                    }}
                                                >
                                                    {article.author.name}
                                                </Typography>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                    <AccessTimeIcon sx={{ fontSize: 12, color: colors.textSecondary }} />
                                                    <Typography
                                                        sx={{
                                                            fontSize: "12px",
                                                            color: colors.textSecondary,
                                                        }}
                                                    >
                                                        {article.readTime} min · {article.publishedDate}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default HomePage;