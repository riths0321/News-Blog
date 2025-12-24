import React from "react";
import { Link } from "react-router-dom";
import { trendingArticles } from "../data/MockData";
import { Box, Typography, Avatar } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

/* SEMANTIC DARK */
const colors = {
    bgDrawer: "#020617",
    border: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea"
};

const TrendingData = () => {
    const leftArticles = trendingArticles.slice(0, 3);
    const rightArticles = trendingArticles.slice(3, 6);

    const renderArticle = (article, index) => (
        <Box
            key={article.id}
            component={Link}
            to={`/article/${article.id}`}
            sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                textDecoration: "none",
                cursor: "pointer",
                py: 1.25,              // light spacing only
                transition: "color 0.25s ease",

                "&:hover h3": {
                    color: colors.accent,
                },
            }}
        >
            {/* INDEX */}
            <Typography
                sx={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: colors.textSecondary,
                    minWidth: 36,
                    textAlign: "right",
                    lineHeight: 1,
                    opacity: 0.45,
                    userSelect: "none",
                }}
            >
                {String(index + 1).padStart(2, "0")}
            </Typography>

            {/* CONTENT */}
            <Box sx={{ minWidth: 0 }}>
                {/* AUTHOR */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                    <Avatar
                        src={article.author.avatar}
                        alt={article.author.name}
                        sx={{ width: 20, height: 20 }}
                    />
                    <Typography
                        sx={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: colors.textSecondary,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {article.author.name}
                    </Typography>
                </Box>

                {/* TITLE (TEXT-LINK FEEL) */}
                <Typography
                    component="h3"
                    sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        lineHeight: 1.35,
                        mb: 0.25,
                        color: colors.textPrimary,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        transition: "color 0.25s ease",
                    }}
                >
                    {article.title}
                </Typography>

                {/* META */}
                <Typography sx={{ fontSize: 12, color: colors.textSecondary }}>
                    {article.publishedDate} · {article.readTime} min read
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                borderBottom: `1px solid ${colors.border}`,
                py: { xs: 4, md: 6 },
                background: colors.bgDrawer,
            }}
        >
            <Box sx={{ maxWidth: 1336, mx: "auto", px: { xs: 2, md: 3 } }}>
                {/* HEADER */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
                    <Box
                        sx={{
                            width: 28,
                            height: 28,
                            borderRadius: 1.25,
                            background: "rgba(234,179,8,0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TrendingUpIcon sx={{ fontSize: 16, color: "#facc15" }} />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: 1,
                            color: colors.textPrimary,
                        }}
                    >
                        TRENDING ON CHECKNEWS
                    </Typography>
                </Box>

                {/* GRID */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        columnGap: 4,
                        rowGap: 1.5,
                    }}
                >
                    <Box>{leftArticles.map(renderArticle)}</Box>
                    <Box>{rightArticles.map((a, i) => renderArticle(a, i + 3))}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TrendingData;
