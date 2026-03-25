"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { BadgeCheck, Download, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [count, setCount] = useState("------");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(
          "https://jettapi.azurewebsites.net/api/VisitorCounterApi",
        );
        if (response.ok) {
          const data = await response.json();
          setCount(data.Count.toString().padStart(6, "0"));
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
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
            Software Engineer & Web Developer
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
            Building <span className="gradient-text">Scalable Solutions</span>{" "}
            for Tomorrow
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="space-y-6 text-sub leading-relaxed text-lg"
          >
            <motion.p variants={fadeInUp}>
              Interesting in cloud architecture with{" "}
              <span className="font-bold text-[var(--foreground)]">Azure</span>{" "}
              and{" "}
              <span className="font-bold text-[var(--foreground)]">
                Next.js
              </span>
              . I enjoy learning how to design and build performant systems.
              With growing expertise in{" "}
              <span className="font-bold text-[var(--foreground)]"> .NET,</span>{" "}
              and{" "}
              <span className="font-bold text-[var(--foreground)]">
                Serverless architecture
              </span>
              .
            </motion.p>
            <motion.p variants={fadeInUp}>
              Beyond implementation, I'm keen to learn more about cloud
              engineering best practices and how to build reliable, scalable
              systems that support high availability.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-6 pt-6"
        >
          <a
            href="mailto:jett@example.com"
            className="px-8 py-3 flex items-center gap-2 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-base hover:opacity-90 transition-opacity"
          >
            <Download size={18} /> Resume
          </a>
          <div className="flex items-center gap-6 font-medium text-base text-sub">
            <a
              href="https://github.com/imbowbow42"
              className="hover:text-[var(--foreground)] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jettpham"
              className="hover:text-[var(--foreground)] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
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
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-serif font-bold text-[var(--foreground)]"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          <motion.div variants={fadeInUp} className="experience-card">
            <div className="experience-dot"></div>
            <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">
              July, 2024 - Present
            </p>
            <h3 className="text-2xl font-serif font-bold leading-none mb-3">
              Frontend Developer Intern
            </h3>
            <p className="text-[var(--accent)] font-bold mb-4 tracking-wide text-lg">
              Company X
            </p>
            <p className="text-sub leading-relaxed text-lg">
              Led the development of cloud-native applications using Azure
              services, implementing serverless architectures that reduced
              operational costs. Established CI/CD pipelines and automated
              deployment processes.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="experience-card">
            <div className="experience-dot"></div>
            <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">
              02/2024 - Present
            </p>
            <h3 className="text-2xl font-serif font-bold leading-none mb-3">
              IT Specialist
            </h3>
            <p className="text-[var(--accent)] font-bold mb-4 tracking-wide text-lg">
              DaouKiwoom - Top Dev
            </p>
            <p className="experience-summary">Responsibilities included:</p>
            <ul className="experience-list">
              <li>
                Monitoring - managing the company network and server systems, including
                DrayTek, UTM, Synology NAS, Dell EMC (ESXi).
              </li>
              <li>
                Build and maintain IT asset and user allocation lists,
                including allocation and recovery tracking.
              </li>
              <li>
                Install and maintain end-user devices, IT equipment, servers,
                and storage equipment.
              </li>
              <li>Plan budget needs for company IT equipment procurement.</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="experience-card">
            <div className="experience-dot"></div>
            <p className="text-sm font-semibold text-sub/60 mb-2 tracking-wider">
              July, 2023 - November, 2023
            </p>
            <h3 className="text-2xl font-serif font-bold leading-none mb-3">
              Frontend Developer Intern
            </h3>
            <p className="text-[var(--accent)] font-bold mb-4 tracking-wide text-lg">
              Phu Hung Securities
            </p>
            <p className="text-sub leading-relaxed text-lg">
              <ul   className="experience-list">
                <li>Working with Restful API. responsible for developing the web-app
                interface according to customer requirements ( real project ) and
                actively researching new technologies during my internship</li>

                <li> Work with the specific aspects of the securities industry.</li>
              <li>Working with real-time stocks data, manage performance and adjusting user feedback ( Dealing dept )</li>
              </ul>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications & Skills Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-8">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-[var(--foreground)]"
            >
              Certifications
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 transition-colors group"
            >
              <div className="text-[var(--accent)] mt-1">
                <BadgeCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif mb-1 group-hover:text-[var(--accent)] transition-colors">
                  Microsoft Certified: Azure Fundamentals
                </h3>
                <p className="text-sub font-medium mb-2">AZ-900</p>
                <a
                  href="https://learn.microsoft.com/api/credentials/share/en-us/PhamBuiGiaBao-7251/2D439EC97A7C4A93?sharingId=1C245356DB2673C7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[var(--accent)] hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                >
                  Verify Credentials ↗
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-[var(--foreground)]"
            >
              Tech Stack
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {[
                "Azure Cloud",
                "Next.js",
                "React",
                ".NET",
                "Node.js",
                "Networking",
                "CosmosDB",
                "Tailwind CSS",
                "Serverless",
                "CI/CD",
                "GitHub Actions",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-semibold rounded-full border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="space-y-12"
      >
        <motion.div
          variants={fadeInUp}
          className="flex justify-between items-end"
        >
          <h2 className="text-4xl font-serif font-bold text-[var(--foreground)]">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Cloud Resume Challenge"
            description="A full-stack, cloud-native resume built on Azure. Features a static frontend hosted on Azure Storage/CDN, a serverless Python API via Azure Functions, and a CosmosDB Table API for visitor tracking, all deployed via GitHub Actions CI/CD."
            techStack={[
              "Azure Functions",
              "CosmosDB",
              "Next.js",
              "Python",
              "CI/CD",
            ]}
            githubLink="https://github.com/imbowbow42/azure-poforlio"
            liveLink="#"
          />
          <ProjectCard
            title="Auth API"
            description="A robust authentication API built with Express.js and TypeScript, handling user registration, standard login, and third-party Google authentication. Connects to Azure Cosmos DB for data storage."
            techStack={["TypeScript", "Express.js", "Azure Cosmos DB", "JWT"]}
            githubLink="https://github.com/imbowbow42/auth-api"
            liveLink="https://login-api.jettpham.cloud"
          />
        </div>

        <motion.div variants={fadeInUp} className="pt-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-bold hover:opacity-80 transition-opacity group"
          >
            Read my Cloud Resume Challenge Blog Post{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
        className="py-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-serif font-bold">
            Let's build something.
          </h2>
          {/* <p className="text-sub text-lg">
            I'm currently open for new opportunities.
          </p> */}
        </motion.div>
        <motion.div variants={fadeInUp}>
          <a
            href="mailto:phamgbao42@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-[var(--accent)]/20"
          >
            <Mail size={20} /> Get in touch
          </a>
        </motion.div>
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
          <span className="text-[var(--foreground)] font-mono text-base tracking-tighter">
            #{count}
          </span>
        </div>
      </motion.footer>
    </main>
  );
}
