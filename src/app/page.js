import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, my name is <span className="text-blue-600">Kirankumar</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            <span className="font-bold">Senior Frontend Developer @ Atlassian</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-4xl mx-auto mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Kirankumar is a technical leader with 8 years of experience
              working on Frontend technologies. He is currently working at
              Atlassian, leading a team of 4 FE Engineers, and owns Frontend
              backlog. Kiran is also driving an accessibility initiative across
              JSM, where he is leading a team of 5 FE Engineers and also driving
              25+ teams in making JSM accessible.
            </p>
            <p className="text-gray-600">
              Kiran is an active open-source contributor. He made contributions
              to React, redux, Gatsby, Hasura, Material UI, GetStream, and
              various other JS libraries. He also loves teaching. He delivered
              10+ conference and meetup talks. &quot;Ask me about JS, React,
              Accessibility and blockchain&quot. Reach out to learn JS Technologies.
              I do Freelance occasionally.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="container mx-auto py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Courses</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4 shadow-lg p-8">
              <h3 className="text-2xl font-bold">Introduction to Web Development</h3>
              <p className="text-gray-600">
                A brief description of your project and the technologies used.
              </p>
              <a
                href="/courses/introduction-to-web-development"
                className="inline-block text-blue-600 hover:text-blue-800"
              >
                View Course →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="container max-w-4xl mx-auto py-16">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-gray-600 mb-8">
                Interested in working together? I&apos;d love to hear from you.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:ambatikirankumar4@gmail.com"
                  className="flex items-center gap-2 text-lg hover:text-blue-600 transition"
                >
                  <FaEnvelope className="text-xl" /> Email me →
                </a>
                <a
                  href="https://github.com/KirankumarAmbati"
                  className="flex items-center gap-2 text-lg hover:text-blue-600 transition"
                >
                  <FaGithub className="text-xl" /> GitHub →
                </a>
                <a
                  href="https://linkedin.com/in/ambatikirankumar"
                  className="flex items-center gap-2 text-lg hover:text-blue-600 transition"
                >
                  <FaLinkedin className="text-xl" /> LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
