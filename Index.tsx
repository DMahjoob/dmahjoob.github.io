
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Code, ChartLine, Bolt, Gamepad2 } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Discord Meeting Transcript Bot",
      description: "Developed using Pycord, Groq, and Google Cloud Speech-to-Text, this project transcribes and summarizes audio recordings in real-time, leveraging AI to extract key insights and action items effortlessly to increase productivity and keep tasks on track.",
      icon: <Code className="h-8 w-8" />,
      link: "https://github.com/DMahjoob/DiscordTranscriber/tree/main",
      tech: ["Python", "Pycord", "Groq", "Google Cloud"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "ML Stock Predictor",
      description: "Developed using Python and TensorFlow, this project predicts stock market trends using a deep learning model trained on historical data. The application integrates Flask for its web interface, providing real-time prediction visualization and analysis tools.",
      icon: <ChartLine className="h-8 w-8" />,
      link: "https://dmahjoob.pythonanywhere.com/",
      tech: ["Python", "TensorFlow", "Flask", "ML"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Lunch Buddies!",
      description: "Leveraged a BERT Transformer model to calculate similarity scores and pair users based on their preferences submitted via Google Forms. It automates matchmaking to connect responders with their best potential lunch partners.",
      icon: <Code className="h-8 w-8" />,
      link: "https://github.com/DMahjoob/AvenuesConsultingProjects/tree/main/Lunch%20Buddies",
      tech: ["BERT", "Transformers", "Google Forms", "AI"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Pokemon Desolation",
      description: "Actively contributed as a quality assurance tester and lead composer, writing a full custom soundtrack and improving player experience through detailed testing. The game was developed with scripting enhancements in Ruby for optimized gameplay mechanics.",
      icon: <Gamepad2 className="h-8 w-8" />,
      link: "https://www.rebornevo.com/deso/index.php/",
      tech: ["Ruby", "Game Dev", "QA", "Music"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Pokemon Azure",
      description: "Designed an intelligent CPU AI system in C++ to dynamically respond to player inputs and strategies. Also composed the majority of the game's immersive soundtrack to elevate the gaming experience.",
      icon: <Bolt className="h-8 w-8" />,
      link: "https://www.rebornevo.com/forums/topic/58037-pokemon-azure-act-2-is-out/",
      tech: ["C++", "AI", "Game Dev", "Music"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI Security Risk Detector",
      description: "Implemented a Linear Regression Model to predict the likelihood of future security risks based on prior breaches. This tool helps evaluate server safety using historical data and advanced statistical techniques.",
      icon: <Code className="h-8 w-8" />,
      link: "https://github.com/DMahjoob/SecurityRiskDetector",
      tech: ["AI", "Linear Regression", "Security", "Statistics"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Darius Mahjoob</h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Darius Mahjoob
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science & Business Administration Major at USC
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Passionate about AI, Data Analytics, and Cryptography
            </p>
            <Button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                Hello! Welcome to my personal website, built with modern React and TypeScript. Thank you so much for visiting!
                I'm Darius Mahjoob, a Computer Science & Business Administration major at USC. I have a passion for AI, data
                analytics, and cryptography, and I love building projects to solve problems.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                Here, you'll find some of my experience and personal projects that I have developed over the past few years.
              </p>
              <div className="flex justify-center space-x-6 pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="mailto:dmahjoob@usc.edu">Email Me</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="https://linkedin.com/in/darius-mahjoob" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-300">Teaching Assistant</CardTitle>
                <CardDescription className="text-lg text-white/80">
                  University of Southern California • November 2024 - May 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  <strong>Courses:</strong> ITP 365, ITP 259, ENGR102 - Managing Data in C++, Basics of AI, Freshman Academy.
                </p>
                <p className="text-white/90">
                  Administrate labs, assist students during office hours, grade labs/assignments, mentor students on AI Model Development, 
                  Data Structures & Abstract Data Types, and Graph Traversal Algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-300">Prompt Engineering Intern</CardTitle>
                <CardDescription className="text-lg text-white/80">
                  Captis Intelligence • May 2024 - August 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Developed a chatbot to enhance query efficiency and accuracy by 25% within the Captis database. 
                  Adapt a pre-trained LLM to generate optimized SQL queries from a dataset exceeding 5 million prompts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/15 transition-all duration-300 text-center">
              <CardContent className="pt-6">
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Full Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 mb-4 line-clamp-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-white/20 text-white/90 hover:bg-white/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-white/90 mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
              <div className="flex justify-center space-x-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                >
                  <a href="mailto:dmahjoob@usc.edu">Email Me</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                >
                  <a href="https://linkedin.com/in/darius-mahjoob" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 | Website designed and developed by Darius Mahjoob
          </p>
          <p className="text-white/40 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
