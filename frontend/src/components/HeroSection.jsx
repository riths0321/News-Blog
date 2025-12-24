import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockArticles } from "../data/MockData";
import TrendingData from "./TrendingData";
import BoltIcon from "@mui/icons-material/Bolt";
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

const HeroSection = () => {
  const navigate = useNavigate();

  // 🔀 Random article opener
  const handleStartReading = () => {
    if (!mockArticles.length) return;

    const randomArticle =
      mockArticles[Math.floor(Math.random() * mockArticles.length)];

    navigate(`/article/${randomArticle.id}`);
  };

  return (
    <>
      {/* HERO BANNER */}
      <Box
        sx={{
          background: `linear-gradient(180deg, ${colors.bgHeader} 0%, ${colors.bgDrawer} 100%)`,
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient effect */}
        <Box
          sx={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: primaryGradient,
            opacity: 0.08,
            filter: "blur(80px)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          {/* Top badges */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 3, flexWrap: "wrap" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                px: 2,
                py: 0.75,
                borderRadius: 2,
                background: "rgba(234,179,8,0.15)",
                border: "1px solid rgba(234,179,8,0.3)",
              }}
            >
              <BoltIcon sx={{ fontSize: 16, color: "#facc15" }} />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#facc15" }}>
                Real-time Updates
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                px: 2,
                py: 0.75,
                borderRadius: 2,
                background: "rgba(102,126,234,0.15)",
                border: `1px solid rgba(102,126,234,0.3)`,
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 16, color: colors.accent }} />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: colors.accent }}>
                Trending Stories
              </Typography>
            </Box>
          </Box>

          {/* Main heading */}
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 900,
              fontFamily: "system-ui, -apple-system, sans-serif",
              mb: 2,
              background: primaryGradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
            }}
          >
            News that matters.
            <br />
            Stories that explain.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: 4,
              maxWidth: 600,
              color: colors.textSecondary,
              lineHeight: 1.6,
            }}
          >
            Read the latest updates from technology, business, world affairs,
            and productivity — written simply, clearly, and honestly.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={handleStartReading}
              sx={{
                background: primaryGradient,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "16px",
                boxShadow: "0 4px 14px rgba(102,126,234,0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(102,126,234,0.5)",
                },
              }}
            >
              Start reading
            </Button>

          </Box>
        </Container>
      </Box>

      {/* TRENDING */}
      <Box sx={{ background: colors.bgDrawer }}>
        <Container maxWidth="lg">
          <TrendingData />
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;