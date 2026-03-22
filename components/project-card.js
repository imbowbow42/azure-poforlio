"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-bold group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-sub/70">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sub text-base leading-relaxed mb-6">{description}</p>
      </div>

      <div className="z-10 flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
