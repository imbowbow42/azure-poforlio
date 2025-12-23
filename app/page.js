export default function Home() {
    return (
        <main className="container">
            {/* Hero Section */}
            <section className="section" id="hero" style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
                    Hi, I&apos;m <span className="gradient-text">Jett Pham</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Frontend Developer Intern & Cloud Enthusiast. Building high-performance
                    web applications and exploring the Azure cloud ecosystem.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#about" className="btn btn-outline">About Me</a>
                </div>
            </section>

            {/* Visitor Counter Placeholder */}
            <div className="glass" style={{ margin: '4rem auto', padding: '1rem 2rem', width: 'fit-content', textAlign: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', marginRight: '0.5rem' }}>Visitor Count:</span>
                <span className="gradient-text" style={{ fontSize: '1.2rem' }}>#000000</span>
            </div>

            {/* About Section */}
            <section className="section" id="about">
                <h2 className="gradient-text">About Me</h2>
                <div className="card">
                    <p>
                        I am a passionate Frontend Developer intern with 4 months of experience.
                        Currently, I am taking on the Cloud Resume Challenge to level up my skills
                        in Azure cloud infrastructure, serverless functions, and CI/CD pipelines.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section" id="skills">
                <h2 className="gradient-text">Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                    {['Next.js', 'React', 'JavaScript', 'Azure Functions', 'Cosmos DB', 'GitHub Actions'].map(skill => (
                        <div key={skill} className="card" style={{ padding: '1rem', textAlign: 'center' }}>
                            {skill}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
