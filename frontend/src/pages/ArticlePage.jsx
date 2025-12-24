import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockArticles, trendingArticles } from "../data/mockData";
import { Card, CardContent, CardMedia, Typography, Box, Container } from "@mui/material";

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
  tagBg: "rgba(102,126,234,0.15)",
  tagBorder: "rgba(102,126,234,0.3)"
};

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [claps, setClaps] = useState(0);

  useEffect(() => {
    const foundArticle = mockArticles.find((a) => a.id === id);
    if (foundArticle) {
      setArticle(foundArticle);
      setClaps(foundArticle.claps);
    }
  }, [id]);

  const handleClap = () => setClaps((prev) => prev + 1);

  if (!article) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bgPrimary,
          color: colors.textSecondary,
          fontSize: "1.25rem"
        }}
      >
        Article not found
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: colors.bgPrimary, py: { xs: 5, md: 10 } }}>
      {/* Center-aligned layout with balanced spacing */}
      <Container
        maxWidth="md"
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 3, md: 5 },
        }}
      >
        <article>
          {/* Title & Subtitle */}
          <Box textAlign="left" mb={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "serif",
                fontWeight: 700,
                mb: 0.5,
                color: colors.textPrimary,
                lineHeight: 1.25,
              }}
            >
              {article.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: colors.textSecondary,
                fontWeight: 400,
                maxWidth: "90%",
                mt: 0.5,
              }}
            >
              {article.subtitle}
            </Typography>
          </Box>

          {/* Author Section */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.border}`}
            pb={3}
            mb={6}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Link to={`/author/${article.author.id}`} style={{ textDecoration: "none" }}>
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                    border: `2px solid ${colors.border}`
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                />
              </Link>
              <Box>
                <Link
                  to={`/author/${article.author.id}`}
                  style={{
                    fontWeight: 600,
                    color: colors.textPrimary,
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = colors.accent)}
                  onMouseOut={(e) => (e.target.style.color = colors.textPrimary)}
                >
                  {article.author.name}
                </Link>
                <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                  {article.readTime} min read • {article.publishedDate}
                </Typography>
              </Box>
            </Box>

            {/* Follow Button */}
            <button
              style={{
                border: `1px solid ${colors.accent}`,
                borderRadius: "9999px",
                padding: "8px 20px",
                fontWeight: 500,
                background: "transparent",
                color: colors.accent,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = colors.accent;
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = colors.accent;
              }}
            >
              Follow
            </button>
          </Box>

          {/* Featured Image */}
          {article.image && (
            <Box mb={6}>
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  border: `1px solid ${colors.border}`
                }}
              />
            </Box>
          )}

          {/* Article Content */}
          <Box>
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <Typography
                    key={index}
                    variant="h5"
                    sx={{
                      fontFamily: "serif",
                      fontWeight: 700,
                      mt: 6,
                      mb: 3,
                      color: colors.textPrimary,
                    }}
                  >
                    {paragraph.replace("## ", "")}
                  </Typography>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{
                      fontFamily: "serif",
                      fontWeight: 600,
                      mt: 4,
                      mb: 2,
                      color: colors.textPrimary,
                    }}
                  >
                    {paragraph.replace("### ", "")}
                  </Typography>
                );
              }
              return (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "1.2rem",
                    lineHeight: 1.9,
                    mb: 3,
                    color: colors.textSecondary,
                    fontFamily: "Georgia, serif",
                    textAlign: "justify",
                  }}
                >
                  {paragraph}
                </Typography>
              );
            })}
          </Box>

          {/* Tags Section */}
          <Box display="flex" flexWrap="wrap" gap={1.5} mt={10}>
            {article.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  px: 3,
                  py: 1,
                  fontSize: "0.9rem",
                  backgroundColor: colors.tagBg,
                  color: colors.accent,
                  border: `1px solid ${colors.tagBorder}`,
                  borderRadius: "9999px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(102,126,234,0.25)",
                    borderColor: colors.accent
                  },
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>

          {/* Author Info Card */}
          <Box
            mt={10}
            pt={6}
            borderTop={`1px solid ${colors.border}`}
            display="flex"
            gap={3}
            alignItems="flex-start"
          >
            <Link to={`/author/${article.author.id}`} style={{ textDecoration: "none" }}>
              <img
                src={article.author.avatar}
                alt={article.author.name}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease",
                  border: `2px solid ${colors.border}`
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              />
            </Link>
            <Box flex={1}>
              <Link
                to={`/author/${article.author.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    color: colors.textPrimary,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": { color: colors.accent }
                  }}
                >
                  {article.author.name}
                </Typography>
              </Link>
              <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                {article.author.followers.toLocaleString()} Followers
              </Typography>
              <Typography sx={{ mt: 1.2, color: colors.textSecondary }}>
                {article.author.bio}
              </Typography>
            </Box>
          </Box>
        </article>
      </Container>

      {/* Trending Section */}
      <Container maxWidth="lg" sx={{ mt: 12, px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          fontFamily="serif"
          mb={5}
          sx={{ color: colors.textPrimary }}
        >
          Trending Articles
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 4,
          }}
        >
          {trendingArticles.map((trend) => (
            <Card
              key={trend.id}
              sx={{
                borderRadius: 3,
                backgroundColor: colors.bgCard,
                border: `1px solid ${colors.border}`,
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                  backgroundColor: colors.bgCardHover,
                  borderColor: colors.accent
                },
              }}
            >
              <Link
                to={`/article/${trend.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={trend.image}
                  alt={trend.title}
                />
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      color: colors.accent,
                      fontWeight: "bold"
                    }}
                  >
                    {trend.category}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "serif",
                      fontWeight: 600,
                      mt: 0.5,
                      lineHeight: 1.3,
                      color: colors.textPrimary
                    }}
                  >
                    {trend.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.5,
                      color: colors.textSecondary
                    }}
                  >
                    {trend.author.name} • {trend.readTime} min read
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ArticlePage;