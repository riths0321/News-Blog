import React, { useEffect, useState, useRef } from "react";
import {
    Dialog,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

/* Semantic dark - matching header */
const colors = {
    bg: "#0f172a",
    bgDark: "#020617",
    border: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea",
    accentHover: "#764ba2"
};

const primaryGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const SubscribePopup = () => {
    const [open, setOpen] = useState(false);
    const [shown, setShown] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        // Skip if already shown in this session
        if (shown) return;

        // Show popup after 15 seconds
        timerRef.current = setTimeout(() => {
            setOpen(true);
            setShown(true);
        }, 15000); // 15 seconds

        // Cleanup timer on unmount
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [shown]);

    const handleClose = () => {
        setOpen(false);
        // Reset after closing
        setTimeout(() => {
            setSuccess(false);
            setEmail("");
            setError("");
        }, 300);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubscribe = () => {
        if (!email) {
            setError("Please enter your email");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            return;
        }

        // Add your subscribe logic here
        console.log("User subscribed:", email);
        setSuccess(true);
        setError("");

        // Auto close after success
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubscribe();
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    backgroundColor: colors.bg,
                    borderRadius: 3,
                    border: `1px solid ${colors.border}`,
                    backgroundImage: "radial-gradient(circle at top right, rgba(102, 126, 234, 0.05), transparent 50%)",
                },
            }}
        >
            <Box sx={{ p: 4, position: "relative" }}>
                {/* CLOSE BUTTON */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        right: 12,
                        top: 12,
                        color: colors.textSecondary,
                        "&:hover": {
                            color: colors.textPrimary,
                        }
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {!success ? (
                    <>
                        {/* ICON & HEADER */}
                        <Box sx={{ textAlign: "center", mb: 3 }}>
                            <Box
                                sx={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: 2.5,
                                    background: primaryGradient,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto",
                                    mb: 2,
                                    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                                }}
                            >
                                <NewspaperIcon sx={{ color: "#fff", fontSize: 32 }} />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: "28px",
                                    fontWeight: 800,
                                    mb: 1,
                                    color: colors.textPrimary,
                                    letterSpacing: "-0.5px",
                                }}
                            >
                                Stay Updated
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: colors.textSecondary,
                                    lineHeight: 1.6,
                                    maxWidth: "400px",
                                    margin: "0 auto",
                                }}
                            >
                                Get breaking news & top stories delivered straight to your inbox. Join thousands of readers.
                            </Typography>
                        </Box>

                        {/* EMAIL INPUT */}
                        <TextField
                            placeholder="Enter your email address"
                            fullWidth
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                            }}
                            onKeyPress={handleKeyPress}
                            error={!!error}
                            helperText={error}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon sx={{ color: colors.textSecondary }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                mb: 2,
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: colors.bgDark,
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
                                "& .MuiFormHelperText-root": {
                                    marginLeft: 0,
                                },
                            }}
                        />

                        {/* SUBSCRIBE BUTTON */}
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleSubscribe}
                            sx={{
                                background: primaryGradient,
                                color: "#fff",
                                fontWeight: 700,
                                py: 1.5,
                                fontSize: "15px",
                                borderRadius: 2,
                                textTransform: "none",
                                boxShadow: "0 4px 16px rgba(102, 126, 234, 0.3)",
                                "&:hover": {
                                    background: primaryGradient,
                                    opacity: 0.9,
                                    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
                                },
                            }}
                        >
                            Subscribe Now
                        </Button>

                        {/* FEATURES */}
                        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1 }}>
                            {[
                                "Daily curated news digest",
                                "Exclusive breaking news alerts",
                                "Cancel anytime, no spam ever"
                            ].map((feature, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            background: primaryGradient,
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            color: colors.textSecondary,
                                        }}
                                    >
                                        {feature}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </>
                ) : (
                    // SUCCESS STATE
                    <Box sx={{ textAlign: "center", py: 3 }}>
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                background: primaryGradient,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto",
                                mb: 3,
                                animation: "scaleIn 0.5s ease",
                                "@keyframes scaleIn": {
                                    "0%": { transform: "scale(0)", opacity: 0 },
                                    "50%": { transform: "scale(1.1)" },
                                    "100%": { transform: "scale(1)", opacity: 1 },
                                },
                            }}
                        >
                            <CheckCircleOutlineIcon sx={{ color: "#fff", fontSize: 40 }} />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 800,
                                mb: 1,
                                color: colors.textPrimary,
                            }}
                        >
                            You're All Set!
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "15px",
                                color: colors.textSecondary,
                            }}
                        >
                            Check your inbox for a confirmation email.
                        </Typography>
                    </Box>
                )}
            </Box>
        </Dialog>
    );
};

export default SubscribePopup;