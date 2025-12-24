import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockArticles } from "../data/MockData";
import {
    Box,
    Container,
    Typography,
    Avatar,
    Button,
    Tabs,
    Tab,
    Card,
    CardMedia,
    CardContent,
    Divider,
} from "@mui/material";

/* ================= SEMANTIC DARK THEME ================= */
const colors = {
    bgPrimary: "#0f172a",
    bgSecondary: "#1e293b",
    bgCard: "#1e293b",
    bgCardHover: "#334155",
    border: "#334155",
    borderLight: "#475569",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    textTertiary: "#64748b",
    accent: "#667eea",
    accentHover: "#764ba2",
};

const AuthorPage = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [authorArticles, setAuthorArticles] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const articles = mockArticles.filter(
            (a) => a.author.id === id
        );

        if (articles.length > 0) {
            setAuthor(articles[0].author);
            setAuthorArticles(articles);
        }
    }, [id]);

    if (!author) {
        return (
            <Box
                sx={{
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: colors.bgPrimary,
                }}
            >
                <Typography sx={{ color: colors.textSecondary }}>
                    Author not found
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ bgcolor: colors.bgPrimary }}>
            {/* AUTHOR HEADER */}
            <Box
                sx={{
                    borderBottom: `1px solid ${colors.border}`,
                    py: { xs: 4, md: 6 },
                }}
            >
                <Container maxWidth="md">
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: { xs: "flex-start", sm: "center" },
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <Avatar
                            src={author.avatar}
                            alt={author.name}
                            sx={{
                                width: 96,
                                height: 96,
                                border: `3px solid ${colors.border}`
                            }}
                        />

                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                fontFamily="serif"
                                sx={{ color: colors.textPrimary }}
                            >
                                {author.name}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 1,
                                    maxWidth: 520,
                                    color: colors.textSecondary
                                }}
                            >
                                {author.bio}
                            </Typography>

                            <Box
                                sx={{
                                    mt: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: "999px",
                                        textTransform: "none",
                                        px: 3,
                                        borderColor: colors.accent,
                                        color: colors.accent,
                                        "&:hover": {
                                            borderColor: colors.accent,
                                            backgroundColor: colors.accent,
                                            color: "#fff"
                                        }
                                    }}
                                >
                                    Follow
                                </Button>

                                <Typography
                                    variant="body2"
                                    sx={{ color: colors.textSecondary }}
                                >
                                    {author.followers.toLocaleString()} Followers
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* TABS */}
            <Box
                sx={{
                    position: "sticky",
                    top: 64,
                    zIndex: 40,
                    bgcolor: colors.bgPrimary,
                    borderBottom: `1px solid ${colors.border}`,
                }}
            >
                <Container maxWidth="md">
                    <Tabs
                        value={activeTab}
                        onChange={(_, val) => setActiveTab(val)}
                        sx={{
                            "& .MuiTab-root": {
                                color: colors.textSecondary,
                                textTransform: "none",
                                fontWeight: 600,
                                "&.Mui-selected": {
                                    color: colors.accent
                                }
                            },
                            "& .MuiTabs-indicator": {
                                backgroundColor: colors.accent
                            }
                        }}
                    >
                        <Tab label="Home" />
                        <Tab label="About" />
                    </Tabs>
                </Container>
            </Box>

            {/* CONTENT */}
            <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
                {/* HOME TAB */}
                {activeTab === 0 && (
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            fontFamily="serif"
                            mb={3}
                            sx={{ color: colors.textPrimary }}
                        >
                            {authorArticles.length}{" "}
                            {authorArticles.length === 1
                                ? "Story"
                                : "Stories"}
                        </Typography>

                        <Box sx={{ display: "grid", gap: 3 }}>
                            {authorArticles.map((article) => (
                                <Card
                                    key={article.id}
                                    component={Link}
                                    to={`/article/${article.id}`}
                                    sx={{
                                        textDecoration: "none",
                                        color: "inherit",
                                        backgroundColor: colors.bgCard,
                                        border: `1px solid ${colors.border}`,
                                        borderRadius: 3,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                                            transform: "translateY(-4px)",
                                            backgroundColor: colors.bgCardHover,
                                            borderColor: colors.accent
                                        },
                                    }}
                                >
                                    {article.image && (
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={article.image}
                                            alt={article.title}
                                        />
                                    )}

                                    <CardContent>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: colors.accent,
                                                fontWeight: 600
                                            }}
                                        >
                                            {article.category}
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            sx={{
                                                mt: 0.5,
                                                color: colors.textPrimary
                                            }}
                                        >
                                            {article.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: colors.textSecondary }}
                                        >
                                            {article.readTime} min read ·{" "}
                                            {article.publishedDate}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* ABOUT TAB */}
                {activeTab === 1 && (
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            fontFamily="serif"
                            mb={3}
                            sx={{ color: colors.textPrimary }}
                        >
                            About {author.name}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.8,
                                mb: 4,
                                color: colors.textSecondary
                            }}
                        >
                            {author.bio}
                        </Typography>

                        <Divider sx={{
                            mb: 3,
                            borderColor: colors.border
                        }} />

                        <Box sx={{ display: "grid", gap: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ color: colors.textSecondary }}>
                                    Followers
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ color: colors.textPrimary }}
                                >
                                    {author.followers.toLocaleString()}
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ color: colors.textSecondary }}>
                                    Stories Published
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ color: colors.textPrimary }}
                                >
                                    {authorArticles.length}
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ color: colors.textSecondary }}>
                                    Estimated Reads
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ color: colors.textPrimary }}
                                >
                                    {authorArticles
                                        .reduce(
                                            (acc, a) => acc + a.readTime * 250,
                                            0
                                        )
                                        .toLocaleString()}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default AuthorPage;