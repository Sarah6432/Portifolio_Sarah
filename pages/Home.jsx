import { ThemeToggle } from "../src/components/ThemeTog";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "../src/components/NavBar";
import { HeroSection } from "../src/components/HeroSection";
import { AboutSection } from "../src/components/AboutMe";
import { SkillsSection } from "../src/components/SkillsSection";
import { ProjectsSection } from "../src/components/ProjectsSection";
import { ContactSection } from "../src/components/ContactSection";
import { Footer } from "../src/components/Footer";

export const Home = () => {
return <>
<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/*Theme Toggle*/}
     <ThemeToggle />
    {/*Background Effects*/}
    <StarBackground />

    {/*Navbar*/}  
    <NavBar />  

    {/*Main Content*/}
    <main>
       <HeroSection /> 
       <AboutSection />
       <SkillsSection />
       <ProjectsSection />
       <ContactSection />
    </main>

    <Footer/>

    {/*Footer*/}
</div>
</>
}