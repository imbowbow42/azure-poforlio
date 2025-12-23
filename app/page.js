import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
    return (
        <main className="space-y-16">
            {/* Header Section */}
            <section className="flex justify-between items-start">
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
            </section>

            {/* Hero Content */}
            <section className="space-y-8">
                <div className="space-y-5">
                    <h1 className="text-6xl font-serif font-bold text-[var(--foreground)] leading-tight tracking-tight">Jett Pham</h1>
                    <p className="text-2xl font-sans font-medium text-sub">Frontend Developer Intern & Cloud Enthusiast</p>
                    <p className="text-base font-sans font-medium tracking-wide text-sub/70">California, USA</p>
                </div>

                <div className="space-y-8 max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold leading-tight">Building Scalable Solutions for Tomorrow</h2>
                    <div className="space-y-6 text-sub leading-relaxed text-lg">
                        <p>
                            Expert in cloud architecture with <span className="font-bold text-[var(--foreground)]">Azure</span> and <span className="font-bold text-[var(--foreground)]">Next.js</span>.
                            I specialize in designing and implementing performant web applications.
                            With growing expertise in <span className="font-bold text-[var(--foreground)]">Python, Kubernetes,</span> and <span className="font-bold text-[var(--foreground)]">Serverless architecture</span>.
                        </p>
                        <p>
                            Beyond technical architecture, I am passionate about DevOps practices and building
                            resilient systems that can scale effectively while maintaining high availability.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6 pt-6">
                    <button className="px-8 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-base hover:opacity-90 transition-opacity">
                        Resume
                    </button>
                    <div className="flex items-center gap-6 font-medium text-base text-sub">
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">Github</a>
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">LinkedIn</a>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-12">
                <h2 className="text-4xl font-serif font-bold text-[var(--foreground)]">Experience</h2>

                <div className="space-y-6">
                    <div className="experience-card">
                        <div className="experience-dot"></div>
                        <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">July, 2024 - Present</p>
                        <h3 className="text-2xl font-serif font-bold leading-none mb-3">Frontend Developer Intern</h3>
                        <p className="text-blue-500 font-bold mb-4 tracking-wide text-lg">Company X</p>
                        <p className="text-sub leading-relaxed text-lg">
                            Led the development of cloud-native applications using Azure services,
                            implementing serverless architectures that reduced operational costs.
                            Established CI/CD pipelines and automated deployment processes.
                        </p>
                    </div>

                    <div className="experience-card">
                        <div className="experience-dot"></div>
                        <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">July, 2022 - 2023</p>
                        <h3 className="text-2xl font-serif font-bold leading-none mb-3">System Engineer</h3>
                        <p className="text-blue-500 font-bold mb-4 tracking-wide text-lg">Company Y</p>
                        <p className="text-sub leading-relaxed text-lg">
                            Assisted in maintaining large-scale distributed systems and optimizing infrastructure performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer / Visitor Counter */}
            <footer className="pt-16 border-t border-[var(--border)] flex justify-between items-center text-sub/60 text-xs font-semibold tracking-wide">
                <p>© 2025 Jett Pham</p>
                <div className="flex items-center gap-3">
                    <span className="uppercase">Visitor Count:</span>
                    <span className="text-[var(--foreground)] font-mono text-base tracking-tighter">#000000</span>
                </div>
            </footer>
        </main>
    );
}
