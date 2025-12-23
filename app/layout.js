import "./globals.css";

export const metadata = {
    title: "Cloud Resume Challenge | Azure Portfolio",
    description: "A premium portfolio website for the Cloud Resume Challenge on Azure.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <nav className="nav glass">
                    <div className="gradient-text" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Azure Resume</div>
                    <div className="nav-links">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#contact" className="btn btn-primary">Contact</a>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
