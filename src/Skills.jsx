import "./index.css";

export const Skills = () => {
    const skills = [
        {name:"Python", icon:"./python.svg"},
        {name:"C++",icon:"./c++LOGO.svg"},
        {name:"SQL",icon:"./sql logo.png"},
        {name:"Javascript",icon:"./js logo.svg"},
        {name:"ReactJs",icon:"./React.svg"},
        {name:"HTML",icon:"./html logo.svg"},
        {name:"CSS",icon:"./css-3.svg"},
        {name:"ASP .NET MVC",icon:"./.net.png"},
        {name:"Github",icon:"./github.png"},
        {name:"Docker",icon:"./Docker.svg"}
    ]

    return(
        <div id="skills" className="skillssec">
            <h4>Skills</h4>
            <h1>What I Work With</h1>
            
            <div className="skillslogogrid">
                {skills.map((skill)=>(
                    <div className="skilllogoitem" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} className="skill-logo" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}