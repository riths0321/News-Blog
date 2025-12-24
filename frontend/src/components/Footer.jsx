import React from "react";
import { Box, Typography, Link, TextField, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import NewspaperIcon from "@mui/icons-material/Newspaper";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmailIcon from "@mui/icons-material/Email";

/* ================= SEMANTIC DARK COLORS ================= */
const colors = {
  bgHeader: "#0f172a",
  bgDrawer: "#020617",
  border: "#1e293b",
  textPrimary: "#e5e7eb",
  textSecondary: "#94a3b8",
  accent: "#667eea"
};

const primaryGradient =
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.bgDrawer,
        pt: 6,
        pb: 3,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: 4 }}>

        {/* ================= TOP SECTION ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 4,
            pb: 5,
          }}
        >
          {/* ================= BRAND ================= */}
          <Box sx={{ maxWidth: 340 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  background: primaryGradient,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NewspaperIcon sx={{ color: "#fff", fontSize: 20 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: colors.textPrimary,
                }}
              >
                CheckNews
              </Typography>
            </Box>

            <Typography
              sx={{
                color: colors.textSecondary,
                fontSize: "14px",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Verified, unbiased, and real-time news from trusted sources worldwide.
            </Typography>

            {/* TRUST BADGES */}
            <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap" }}>
              {[
                {
                  Icon: VerifiedIcon,
                  label: "Verified",
                  bgColor: "rgba(34,197,94,0.15)",
                  color: "#4ade80"
                },
                {
                  Icon: PublicIcon,
                  label: "Global",
                  bgColor: "rgba(56,189,248,0.15)",
                  color: "#38bdf8"
                },
                {
                  Icon: TrendingUpIcon,
                  label: "Trending",
                  bgColor: "rgba(102,126,234,0.15)",
                  color: colors.accent
                },
              ].map(({ Icon, label, bgColor, color }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1.5,
                    background: bgColor,
                  }}
                >
                  <Icon sx={{ fontSize: 14, color }} />
                  <Typography sx={{ fontSize: "12px", fontWeight: 600, color }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ================= QUICK LINKS ================= */}
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                mb: 1.5,
                color: colors.textPrimary,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              Quick Links
            </Typography>

            {[
              { label: "Latest", to: "/" },
              { label: "Blogs", to: "/bloglist" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" }
            ].map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.to}
                underline="none"
                sx={{
                  display: "block",
                  fontSize: "14px",
                  color: colors.textSecondary,
                  mb: "8px",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    color: colors.accent,
                    pl: 0.5
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* ================= SUBSCRIBE ================= */}
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                mb: 1.5,
                color: colors.textPrimary,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              Subscribe
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: colors.textSecondary,
                mb: 2,
                lineHeight: 1.6
              }}
            >
              Get the latest news delivered straight to your inbox.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Your email address"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <EmailIcon sx={{ color: colors.textSecondary, mr: 1 }} />
                  )
                }}
                sx={{
                  input: { color: colors.textPrimary },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#020617",
                    "& fieldset": {
                      borderColor: colors.border
                    },
                    "&:hover fieldset": {
                      borderColor: colors.accent
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.accent
                    }
                  }
                }}
              />

              <Button
                variant="contained"
                sx={{
                  background: primaryGradient,
                  fontWeight: 700,
                  px: 2.5,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    opacity: 0.9
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Typography
              sx={{
                fontSize: "12px",
                color: colors.textSecondary,
                mt: 1
              }}
            >
              No spam. Unsubscribe anytime.
            </Typography>
          </Box>
        </Box>

        {/* ================= BOTTOM BAR ================= */}
        <Box
          sx={{
            borderTop: `1px solid ${colors.border}`,
            pt: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          <Typography sx={{ fontSize: "13px", color: colors.textSecondary }}>
            © {new Date().getFullYear()} CheckNews • Fast • Trusted • Secure
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {[
              { label: "Privacy", to: "/privacy" },
              { label: "Terms", to: "/terms" },
              { label: "Disclaimer", to: "/disclaimer" }
            ].map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.to}
                underline="none"
                sx={{
                  fontSize: "13px",
                  color: colors.textSecondary,
                  transition: "all 0.25s ease",
                  "&:hover": { color: colors.accent },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
