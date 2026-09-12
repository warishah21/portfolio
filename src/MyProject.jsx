import "./index.css";
import { useState } from "react";

export const MyProject = () => {
    const [activetab ,setactiveTab] = useState("academic");

    const academicprojects =[
        {
            title: "InternConnect",
            description:"Course: Web Development => A Student Internship web based application developed to bridge the gap between students seeking internships or employement opurtunities and employeers looking fir qaulified candidates.",
            tech: ["ASP .NET Core MVC","C#","Entity Framework Core","SQL SERVER","Html","CSS"],
            link:"https://github.com/warishah21/InternConnect-ASPNET-MVC"
        },
        {
            title: "Diet Plan App Design",
            description:"Course: Software Engneering =>  a comprehensive mobile app user interface (UI) wireframe designed for a health, fitness, and diet tracking application.guiding a user through onboarding, allergy selection, meal planning, daily workout schedules, and direct chat support.",
            tech: ["Figma"],
            link:"https://github.com/warishah21/Dietplanfigma.git"
        }
    ];

    const personalprojects = [
        {
            title: "MagicDiary",
            description:"Magic Diary is a journaling app with an AI-powered enchanted diary companion that responds to your entries in a warm, whimsical voice and remembers your recent pages for context.",
            tech: ["Python","SQLAlchemy","Ollama","javascript","Html","CSS"],
            link:"https://github.com/warishah21/magicdiary"
        },
        {
            title: "Ecommerce Frontend",
            description:"Developed a React.js e-commerce frontend featuring dynamic product listings, cart management, product detail pages, and checkout — consuming a custom REST API for real-time data.",
            tech: ["React JS"],
            link:"https://github.com/warishah21/ecommerce-react"
        }
    ];

    const projectsShow = activetab === "academic" ? academicprojects : personalprojects;

    return(
        <div id="projects" className="projectsec">
            <h4>My Projects</h4>

            <div className="project-tabs">
                <button className={`tab-btn ${activetab === "academic" ? "active" : ""}`} onClick={() => setactiveTab("academic")}>Academic Projects</button>
                <button className={`tab-btn ${activetab === "personal" ? "active" : ""}`} onClick={() => setactiveTab("personal")}>Personal Projects</button>
            </div>

            <div className="projectgrid">
                {projectsShow.map((project) => (
                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="projecttech">
                            {project.tech.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="blank" rel="noreferrer" className="project-link">View Project</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

