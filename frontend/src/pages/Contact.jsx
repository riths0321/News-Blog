import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    Alert,
    Snackbar
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const colors = {
    bgHeader: "#0f172a",
    bgDrawer: "#020617",
    border: "#1e293b",
    textPrimary: "#e5e7eb",
    textSecondary: "#94a3b8",
    accent: "#667eea"
};

const primaryGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const contactInfo = [
    {
        icon: EmailIcon,
        title: "Email Us",
        details: "support@checknews.com",
        color: colors.accent,
        bg: "rgba(102,126,234,0.15)"
    },
    {
        icon: PhoneIcon,
        title: "Call Us",
        details: "+91 (555) 123-4567",
        color: "#4ade80",
        bg: "rgba(34,197,94,0.15)"
    },
    {
        icon: LocationOnIcon,
        title: "Visit Us",
        details: "Bhopal, MP, India",
        color: "#38bdf8",
        bg: "rgba(56,189,248,0.15)"
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", subject: "", message: ""
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setOpenSnackbar(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <Box sx={{ background: colors.bgDrawer, Height: "100vh", pb: 10 }}>
            {/* Hero Section - Fully Centered */}
            <Box
                sx={{
                    background: `linear-gradient(180deg, ${colors.bgHeader} 0%, ${colors.bgDrawer} 100%)`,
                    borderBottom: `1px solid ${colors.border}`,
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="overline"
                        sx={{ color: colors.accent, fontWeight: 700, letterSpacing: 2, mb: 2, display: "block" }}
                    >
                        Get In Touch
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
                            fontWeight: 900,
                            background: primaryGradient,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 3,
                            lineHeight: 1.2,
                        }}
                    >
                        Let's start a conversation
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            color: colors.textSecondary,
                            maxWidth: 600,
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Have questions or feedback? Our team typically responds within 24 hours.
                    </Typography>
                </Container>
            </Box>

            {/* Info Cards & Form Container */}
            <Container maxWidth="lg" sx={{ mt: -5, position: "relative", zIndex: 2 }}>
                {/* 1. Contact Info Cards */}
                <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
                    {contactInfo.map((info, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                sx={{
                                    background: colors.bgHeader,
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: 4,
                                    p: 4,
                                    textAlign: "center",
                                    height: "100%",
                                    width:320,
                                    transition: "0.3s",
                                    "&:hover": { transform: "translateY(-5px)", borderColor: info.color }
                                }}
                            >
                                <Box sx={{
                                    width: 60, height: 60, borderRadius: "50%",
                                    background: info.bg, display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                    mx: "auto", mb: 2
                                }}>
                                    <info.icon sx={{ color: info.color, fontSize: 30 }} />
                                </Box>
                                <Typography variant="h6" sx={{ color: colors.textPrimary, fontWeight: 700, mb: 1 }}>
                                    {info.title}
                                </Typography>
                                <Typography sx={{ color: colors.textSecondary }}>
                                    {info.details}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* 2. Contact Form - Centered and Responsive Width */}
                <Container maxWidth="lg">
                    <Paper
                        elevation={0}
                        sx={{
                            background: colors.bgHeader,
                            border: `1px solid ${colors.border}`,
                            borderRadius: 6,
                            p: { xs: 3, md: 5 },
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Full Name" name="name"
                                        variant="outlined" value={formData.name}
                                        onChange={handleChange} required
                                        sx={inputStyle}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Email Address" name="email"
                                        type="email" value={formData.email}
                                        onChange={handleChange} required
                                        sx={inputStyle}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Subject" name="subject"
                                        value={formData.subject}
                                        onChange={handleChange} required
                                        sx={inputStyle}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Message" name="message"
                                        multiline rows={4} value={formData.message}
                                        onChange={handleChange} required
                                        sx={inputStyle}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit" fullWidth variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            background: primaryGradient,
                                            py: 1.8, borderRadius: 2,
                                            fontWeight: 700, textTransform: "none",
                                            fontSize: "1rem"
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </Container>

            <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>Message sent successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

// Reusable style for inputs
const inputStyle = {
    "& .MuiOutlinedInput-root": {
        color: colors.textPrimary,
        "& fieldset": { borderColor: colors.border },
        "&:hover fieldset": { borderColor: colors.accent },
        "&.Mui-focused fieldset": { borderColor: colors.accent },
    },
    "& .MuiInputLabel-root": { color: colors.textSecondary },
};

export default Contact;