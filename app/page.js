'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    const [count, setCount] = useState('------');

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch(process.env.AZURE_FUNCTION_URL);
                if (response.ok) {
                    const data = await response.json();
                    setCount(data.Count.toString().padStart(6, '0'));
                }
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        fetchCount();
    }, []);

    return (
        <main className="space-y-16">
            {/* Header Section */}
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-between items-start"
            >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[var(--border)] bg-zinc-900 shadow-xl">
                    <Image
                        src="/avatar.png"
                        alt="Jett Pham"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <ThemeToggle />
            </motion.section>

            {/* Hero Content */}
            <motion.section
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-8"
            >
                <motion.div variants={staggerContainer} className="space-y-5">
                    <motion.h1
                        variants={fadeInUp}
                        className="text-6xl font-serif font-bold text-[var(--foreground)] leading-tight tracking-tight"
                    >
                        Jett Pham
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-2xl font-sans font-medium text-sub"
                    >
                        Software Developer & Cloud Practitioner
                    </motion.p>
                    <motion.p
                        variants={fadeInUp}
                        className="text-base font-sans font-medium tracking-wide text-sub/70"
                    >
                        HCMC, VietNam
                    </motion.p>
                </motion.div>

                <motion.div variants={staggerContainer} className="space-y-8 max-w-2xl">
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-serif font-bold leading-tight"
                    >
                        Building Scalable Solutions for Tomorrow
                    </motion.h2>
                    <motion.div variants={staggerContainer} className="space-y-6 text-sub leading-relaxed text-lg">
                        <motion.p variants={fadeInUp}>
                            Interesting in cloud architecture with <span className="font-bold text-[var(--foreground)]">Azure</span> and <span className="font-bold text-[var(--foreground)]">Next.js</span>.
                            I enjoy learning how to design and build performant systems.
                            With growing expertise in <span className="font-bold text-[var(--foreground)]"> .NET,</span> and <span className="font-bold text-[var(--foreground)]">Serverless architecture</span>.
                        </motion.p>
                        <motion.p variants={fadeInUp}>
                            Beyond implementation, I'm keen to learn more about cloud engineering best practices and how to build reliable, scalable systems that support high availability.
                        </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="flex items-center gap-6 pt-6"
                >
                    <button className="px-8 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-base hover:opacity-90 transition-opacity">
                        Resume
                    </button>
                    <div className="flex items-center gap-6 font-medium text-base text-sub">
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">Github ( Pushed by Github Action)</a>
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">LinkedIn</a>
                    </div>
                </motion.div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="space-y-12"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold text-[var(--foreground)]">Experience</motion.h2>

                <div className="space-y-6">
                    <motion.div variants={fadeInUp} className="experience-card">
                        <div className="experience-dot"></div>
                        <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">July, 2024 - Present</p>
                        <h3 className="text-2xl font-serif font-bold leading-none mb-3">Frontend Developer Intern</h3>
                        <p className="text-blue-500 font-bold mb-4 tracking-wide text-lg">Company X</p>
                        <p className="text-sub leading-relaxed text-lg">
                            Led the development of cloud-native applications using Azure services,
                            implementing serverless architectures that reduced operational costs.
                            Established CI/CD pipelines and automated deployment processes.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="experience-card">
                        <div className="experience-dot"></div>
                        <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">July, 2022 - 2023</p>
                        <h3 className="text-2xl font-serif font-ybold leading-none mb-3">System Engineer</h3>
                        <p className="text-blue-500 font-bold mb-4 tracking-wide text-lg">Company Y</p>
                        <p className="text-sub leading-relaxed text-lg">
                            Assisted in maintaining large-scale distributed systems and optimizing infrastructure performance.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer / Visitor Counter */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="pt-16 border-t border-[var(--border)] flex justify-between items-center text-sub/60 text-xs font-semibold tracking-wide"
            >
                <p>© 2025 Jett - Built with Next.js</p>
                <div className="flex items-center gap-3">
                    <span className="uppercase">Visitor Count:</span>
                    <span className="text-[var(--foreground)] font-mono text-base tracking-tighter">#{count}</span>
                </div>
            </motion.footer>
        </main>
    );
}
