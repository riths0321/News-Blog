import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
} from "@mui/material";

/* ================= SEMANTIC DARK THEME ================= */
const colors = {
    bgCard: "#1e293b",
    bgCardHover: "#334155",
    border: "#334155",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea",
    categoryBg: "rgba(102,126,234,0.15)",
    categoryText: "#a5b4fc"
};

const BlogList = ({ articles = [] }) => {
    return (
        <Box
            sx={{
                maxWidth: 1336,
                mx: "auto",
                mt: { xs: 4, md: 8 },
                px: { xs: 2, md: 3 },
                display: "grid",
                gap: { xs: 3, md: 4 },
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                },
            }}
        >
            {articles.map((article) => (
                <Card
                    key={article.id}
                    sx={{
                        height: "100%",
                        borderRadius: 3,
                        backgroundColor: colors.bgCard,
                        border: `1px solid ${colors.border}`,
                        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                            transform: { md: "translateY(-6px)" },
                            backgroundColor: { md: colors.bgCardHover },
                            boxShadow: { md: "0 10px 25px -5px rgba(0,0,0,0.5)" },
                            borderColor: { md: colors.accent }
                        },
                    }}
                >
                    <Link
                        to={`/article/${article.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        {/* IMAGE */}
                        {article.image && (
                            <CardMedia
                                component="img"
                                image={article.image}
                                alt={article.title}
                                sx={{
                                    height: { xs: 180, md: 200 },
                                    objectFit: "cover",
                                }}
                            />
                        )}

                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            {/* CATEGORY */}
                            {article.category && (
                                <Chip
                                    label={article.category}
                                    size="small"
                                    sx={{
                                        alignSelf: "flex-start",
                                        bgcolor: colors.categoryBg,
                                        color: colors.categoryText,
                                        fontWeight: 600,
                                        border: `1px solid ${colors.accent}33`
                                    }}
                                />
                            )}

                            {/* TITLE */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                    color: colors.textPrimary,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {article.title}
                            </Typography>

                            {/* SUBTITLE */}
                            {article.subtitle && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1.5,
                                        color: colors.textSecondary,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {article.subtitle}
                                </Typography>
                            )}

                            {/* AUTHOR */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                                {article.author?.avatar && (
                                    <Box
                                        component="img"
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: `2px solid ${colors.border}`
                                        }}
                                    />
                                )}

                                <Typography
                                    variant="body2"
                                    sx={{ color: colors.textSecondary }}
                                >
                                    {article.author?.name} · {article.publishedDate} ·{" "}
                                    {article.readTime} min read
                                </Typography>
                            </Box>

                            {/* STATS */}
                            {(article.claps || article.comments) && (
                                <Typography
                                    variant="caption"
                                    sx={{
                                        mt: 0.5,
                                        color: colors.textSecondary
                                    }}
                                >
                                    {article.claps} Claps · {article.comments} Comments
                                </Typography>
                            )}
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </Box>
    );
};

export default BlogList;