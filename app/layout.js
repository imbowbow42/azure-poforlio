import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
    title: "Jett Pham | Cloud Resume",
    description: "Frontend Developer & Cloud Solutions Expert Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased font-['Inter',sans-serif]">
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="max-w-2xl mx-auto px-6 py-16">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
