import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    Container,
    Dialog,
    DialogContent,
    TextField,
    Button,
    InputAdornment,
    Divider,
    Alert
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

/* ================= SEMANTIC DARK ================= */
const colors = {
    bgHeader: "#0f172a",
    bgDrawer: "#020617",
    bgModal: "#0f172a",
    border: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea",
    accentHover: "#764ba2",
};

const primaryGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

/* ================= NAV ================= */
const navItems = [
    { label: "Home", to: "/" },
    { label: "Blogs", to: "/bloglist" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [signInOpen, setSignInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        }
        // Add your sign in logic here
        console.log("Sign In:", formData);
        setSignInOpen(false);
        setFormData({ name: "", email: "", password: "" });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        }
        // Add your sign up logic here
        console.log("Sign Up:", formData);
        setSignUpOpen(false);
        setFormData({ name: "", email: "", password: "" });
    };

    const handleSocialAuth = (provider) => {
        console.log(`Auth with ${provider}`);
        // Add social auth logic here
    };

    const AuthModal = ({ open, onClose, isSignUp }) => (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    backgroundColor: colors.bgModal,
                    borderRadius: 3,
                    border: `1px solid ${colors.border}`,
                },
            }}
        >
            <DialogContent sx={{ p: 4 }}>
                {/* Close Button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 12,
                        top: 12,
                        color: colors.textSecondary,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2.5,
                            background: primaryGradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            mb: 2,
                        }}
                    >
                        <NewspaperIcon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: colors.textPrimary,
                            mb: 0.5,
                        }}
                    >
                        {isSignUp ? "Create Account" : "Welcome Back"}
                    </Typography>
                    <Typography sx={{ color: colors.textSecondary, fontSize: "14px" }}>
                        {isSignUp
                            ? "Sign up to access all features"
                            : "Sign in to your account"}
                    </Typography>
                </Box>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {/* Form */}
                <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {isSignUp && (
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlineIcon
                                                sx={{ color: colors.textSecondary }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: colors.bgDrawer,
                                        color: colors.textPrimary,
                                        borderRadius: 2,
                                        "& fieldset": {
                                            borderColor: colors.border,
                                        },
                                        "&:hover fieldset": {
                                            borderColor: colors.accent,
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: colors.accent,
                                        },
                                    },
                                    "& .MuiOutlinedInput-input::placeholder": {
                                        color: colors.textSecondary,
                                        opacity: 0.7,
                                    },
                                }}
                            />
                        )}

                        <TextField
                            fullWidth
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon
                                            sx={{ color: colors.textSecondary }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: colors.bgDrawer,
                                    color: colors.textPrimary,
                                    borderRadius: 2,
                                    "& fieldset": {
                                        borderColor: colors.border,
                                    },
                                    "&:hover fieldset": {
                                        borderColor: colors.accent,
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: colors.accent,
                                    },
                                },
                                "& .MuiOutlinedInput-input::placeholder": {
                                    color: colors.textSecondary,
                                    opacity: 0.7,
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon
                                            sx={{ color: colors.textSecondary }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: colors.bgDrawer,
                                    color: colors.textPrimary,
                                    borderRadius: 2,
                                    "& fieldset": {
                                        borderColor: colors.border,
                                    },
                                    "&:hover fieldset": {
                                        borderColor: colors.accent,
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: colors.accent,
                                    },
                                },
                                "& .MuiOutlinedInput-input::placeholder": {
                                    color: colors.textSecondary,
                                    opacity: 0.7,
                                },
                            }}
                        />

                        {!isSignUp && (
                            <Typography
                                sx={{
                                    textAlign: "right",
                                    fontSize: "13px",
                                    color: colors.accent,
                                    cursor: "pointer",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                Forgot Password?
                            </Typography>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                background: primaryGradient,
                                color: "#fff",
                                fontWeight: 600,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: "15px",
                                "&:hover": {
                                    background: primaryGradient,
                                    opacity: 0.9,
                                },
                            }}
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>
                    </Box>
                </form>

                {/* Divider */}
                <Divider sx={{ my: 3, borderColor: colors.border }}>
                    <Typography sx={{ color: colors.textSecondary, fontSize: "13px" }}>
                        OR
                    </Typography>
                </Divider>

                {/* Social Login */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        onClick={() => handleSocialAuth("google")}
                        sx={{
                            borderColor: colors.border,
                            color: colors.textPrimary,
                            py: 1.25,
                            borderRadius: 2,
                            textTransform: "none",
                            "&:hover": {
                                borderColor: colors.accent,
                                backgroundColor: "rgba(102, 126, 234, 0.1)",
                            },
                        }}
                    >
                        Continue with Google
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        onClick={() => handleSocialAuth("github")}
                        sx={{
                            borderColor: colors.border,
                            color: colors.textPrimary,
                            py: 1.25,
                            borderRadius: 2,
                            textTransform: "none",
                            "&:hover": {
                                borderColor: colors.accent,
                                backgroundColor: "rgba(102, 126, 234, 0.1)",
                            },
                        }}
                    >
                        Continue with GitHub
                    </Button>
                </Box>

                {/* Footer */}
                <Typography
                    sx={{
                        textAlign: "center",
                        mt: 3,
                        fontSize: "14px",
                        color: colors.textSecondary,
                    }}
                >
                    {isSignUp ? "Already have an account? " : "Don't have an account? "}
                    <Typography
                        component="span"
                        onClick={() => {
                            if (isSignUp) {
                                setSignUpOpen(false);
                                setSignInOpen(true);
                            } else {
                                setSignInOpen(false);
                                setSignUpOpen(true);
                            }
                            setError("");
                            setFormData({ name: "", email: "", password: "" });
                        }}
                        sx={{
                            color: colors.accent,
                            fontWeight: 600,
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </Typography>
                </Typography>
            </DialogContent>
        </Dialog>
    );

    return (
        <>
            {/* ================= HEADER ================= */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: colors.bgHeader,
                    borderBottom: `1px solid ${colors.border}`,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: { xs: 64, md: 72 },
                        }}
                    >
                        {/* LOGO */}
                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.25,
                                textDecoration: "none",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 2,
                                    background: primaryGradient,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
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

                        {/* DESKTOP NAV */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                gap: 3,
                            }}
                        >
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.label}
                                    to={item.to}
                                    style={{ textDecoration: "none" }}
                                >
                                    {({ isActive }) => (
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                color: isActive
                                                    ? colors.accent
                                                    : colors.textSecondary,
                                                position: "relative",
                                                cursor: "pointer",
                                                transition: "color 0.25s ease",
                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    left: 0,
                                                    right: 0,
                                                    bottom: -6,
                                                    height: "2px",
                                                    backgroundColor: colors.accent,
                                                    transform: isActive
                                                        ? "scaleX(1)"
                                                        : "scaleX(0)",
                                                    transition: "transform 0.25s ease",
                                                },
                                                "&:hover": {
                                                    color: colors.textPrimary,
                                                },
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    )}
                                </NavLink>
                            ))}
                        </Box>

                        {/* AUTH BUTTONS (DESKTOP) */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                            <Button
                                onClick={() => setSignInOpen(true)}
                                sx={{
                                    color: colors.textPrimary,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    px: 2.5,
                                    "&:hover": {
                                        backgroundColor: "rgba(102, 126, 234, 0.1)",
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                            <Button
                                onClick={() => setSignUpOpen(true)}
                                sx={{
                                    background: primaryGradient,
                                    color: "#fff",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    px: 2.5,
                                    borderRadius: 2,
                                    "&:hover": {
                                        background: primaryGradient,
                                        opacity: 0.9,
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        {/* MOBILE MENU ICON */}
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{
                                display: { md: "none" },
                                color: colors.textPrimary,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* ================= MOBILE DRAWER ================= */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: "80%",
                        maxWidth: 300,
                        backgroundColor: colors.bgDrawer,
                    },
                }}
            >
                {/* Drawer Header */}
                <Box
                    sx={{
                        px: 2.5,
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: `1px solid ${colors.border}`,
                    }}
                >
                    <Typography sx={{ color: colors.textPrimary, fontWeight: 700 }}>
                        Menu
                    </Typography>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        sx={{ color: colors.textPrimary }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Drawer Links */}
                <List sx={{ px: 2, pt: 2 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <NavLink
                                to={item.to}
                                onClick={() => setDrawerOpen(false)}
                                style={({ isActive }) => ({
                                    textDecoration: "none",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    color: isActive ? colors.accent : colors.textSecondary,
                                    padding: "12px 0",
                                    display: "block",
                                    width: "100%",
                                })}
                            >
                                {item.label}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>

                {/* Auth Buttons (Mobile) */}
                <Box sx={{ px: 2, mt: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Button
                        fullWidth
                        onClick={() => {
                            setDrawerOpen(false);
                            setSignInOpen(true);
                        }}
                        sx={{
                            color: colors.textPrimary,
                            textTransform: "none",
                            fontWeight: 600,
                            borderColor: colors.border,
                            borderWidth: 1,
                            borderStyle: "solid",
                            py: 1.25,
                            "&:hover": {
                                backgroundColor: "rgba(102, 126, 234, 0.1)",
                                borderColor: colors.accent,
                            },
                        }}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        onClick={() => {
                            setDrawerOpen(false);
                            setSignUpOpen(true);
                        }}
                        sx={{
                            background: primaryGradient,
                            color: "#fff",
                            textTransform: "none",
                            fontWeight: 600,
                            py: 1.25,
                            "&:hover": {
                                background: primaryGradient,
                                opacity: 0.9,
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Drawer>

            {/* ================= AUTH MODALS ================= */}
            <AuthModal open={signInOpen} onClose={() => setSignInOpen(false)} isSignUp={false} />
            <AuthModal open={signUpOpen} onClose={() => setSignUpOpen(false)} isSignUp={true} />
        </>
    );
};

export default Header;