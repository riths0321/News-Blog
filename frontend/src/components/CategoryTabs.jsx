import React from "react";
import { Box } from "@mui/material";

// Sirf wahi categories jo aap dikhana chahte hain
export const categories = [
  "For you",
  "India",
  "World",
  "Politics",
  "Economy",
  "Finance",
  "Stock Market",
  "Technology",
  "Business",
  "Programming",
  "Productivity",
  "Engineering",
  "Startups",
  "Gadgets",
  "Cyber Security",
];

const colors = {
  bgHeader: "#0f172a",
  border: "#1e293b",
  textPrimary: "#e5e7eb",
  textSecondary: "#94a3b8",
  accent: "#667eea"
};

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  // 1. Duplicate "World" ya koi aur item remove karne ke liye
  const uniqueCategories = [...new Set(categories)];

  // 2. Loop ke liye sirf do baar repeat karein
  const marqueeItems = [...uniqueCategories, ...uniqueCategories];

  return (
    <Box
      sx={{
        position: "sticky",
        top: { xs: 56, sm: 64, md: 70 },
        zIndex: 50,
        bgcolor: colors.bgHeader,
        borderBottom: `1px solid ${colors.border}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 50s linear infinite", 
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" }, 
          },
          "&:hover": { animationPlayState: "paused" },
        }}
      >
        {marqueeItems.map((category, index) => {
          const isActive = activeCategory === category;

          return (
            <Box
              key={`${category}-${index}`}
              onClick={() => setActiveCategory(category)}
              sx={{
                cursor: "pointer",
                px: { xs: 3, md: 4 },
                py: 2,
                whiteSpace: "nowrap",
                fontSize: "14px",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? colors.accent : colors.textSecondary,
                position: "relative",
                transition: "all 0.2s ease",
                
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "25%",
                  right: "25%",
                  bottom: 6,
                  height: "2.5px",
                  background: colors.accent,
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.25s ease",
                  borderRadius: "2px"
                },
                "&:hover": { color: colors.textPrimary },
              }}
            >
              {category}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CategoryTabs;