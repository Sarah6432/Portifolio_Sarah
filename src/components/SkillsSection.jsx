const skills = [
    {name: "HTML/CSS", level: 95, categore:"Frontend"},
    {name: "JavaScript", level: 90, categore:"Frontend"},
    {name: "React", level: 90, categore:"Frontend"},
    {name: "Typescript", level: 90, categore:"Frontend"},
    {name: "Tailwind CSS", level: 90, categore:"Frontend"},
    {name: "Next.js", level: 85, categore:"Frontend"},

    {name: "Node.js", level: 90, categore:"Backend"},
    {name: "Express", level: 85, categore:"Backend"},
    {name: "MySQL", level: 85, categore:"Database"},

    {name: "Java", level: 50, categore:"Language"},
    {name: "Python", level: 90, categore:"Language"},

    {name: "Git/GitHub", level: 90, categore:"tools"},
    {name: "Figma", level: 85, categore:"tools"},
    {name: "Vs Code", level: 95, categore:"tools"},
    {name: "IntelliJ", level: 90, categore:"tools"},

]


export const SkillsSection = () => {
    return <section id="skills" className="py-4 px-4 relative bg-secondary/30 ">
     <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
        </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
            <div>
                <h3>{skill.name}</h3>
            </div>
            </div>
            ))}
       </div>
     </div>
    </section>

}