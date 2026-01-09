import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Portal: Environmental Licensing Services",
        description: "A web portal developed for managing environmental licensing services and registrations, featuring a React frontend, Node.js backend, and Firebase database.",
        image: "/projects/Projeto - EPortal.png",
        tags: ["React", "Node.js", "Firebase", "Sass"],
    },
    {
        id: 2,
        title: "Araponga: Complaint & Transparency Management",
        description: "A mobile application designed to streamline complaint management and transparency portal information, built with Flutter for cross-platform support and Firebase integration.",
        image: "/projects/Projeto - Araponga.png",
        tags: ["Flutter", "Firebase"],
        githubUrl: "https://github.com/arapongaapp/araponga"
    },
    {
        id: 3,
        title: "Accessible Routes: Web & Mobile System",
        description: "A comprehensive solution to assist people with disabilities in navigating accessible routes, utilizing React Native for the mobile app and React for the web dashboard.",
        image: "/projects/Projeto - RotasAcessíveis.png",
        tags: ["React", "Node.js", "ReactNative", "TailwindCSS"],
    },
    {
        id: 4,
        title: "Gymio: Gym Management Ecosystem",
        description: "A management platform for gyms featuring both mobile and web interfaces, developed with Flutter and React to provide a seamless cross-platform experience.",
        image: "/projects/Projeto - Gymio.png",
        tags: ["Flutter", "Firebase", "React", "Node.js", "TailwindCSS"],
    },
    {
        id: 5,
        title: "Aromas: E-commerce Menu & Delivery",
        description: "A restaurant e-commerce system with integrated delivery features, built using HTML, CSS, and Node.js with a real-time Firebase database.",
        image: "/projects/Projeto - Aromas.png",
        tags: ["Html", "Css", "Node.js", "Firebase"],
    }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently, showcasing my skills in web and mobile development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-2xl shadow-2xl overflow-hidden card-hover w-full transition-all duration-300 border border-white/10 flex flex-col h-full"
            >

              <div className="h-64 md:h-72 lg:h-80 w-full overflow-hidden"> 
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 flex flex-col grow items-center text-center bg-linear-to-b from-card to-background/50">
                 
                 <div className="min-h-20 flex items-center justify-center">
                    <h3 className="font-bold text-2xl leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                 </div>
                 <p className="mt-4 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                 <div className="mt-auto pt-6">
                    <div className="flex gap-3 flex-wrap justify-center mb-6">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs uppercase tracking-widest bg-primary/5 text-primary/80 font-semibold px-4 py-1.5 rounded-full border border-primary/10"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          View GitHub
                        </a>
                    )}
                 </div>
              </div>
            </div> 
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://github.com/sarah6432" className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank">
            Check My GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
}