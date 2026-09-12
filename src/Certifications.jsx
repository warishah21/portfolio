import "./index.css";

export const Certifications = () =>{
    const certificates = [
        {title:"DataBase Management System for AI & Data Sciences",completiondate:"Completed October 2025",source:"NED, Karachi, Pakistan "}
    ]

    return(
        <div id="certificates" className="certificatesec">
            <h4>Certifications</h4>

            <div className="certificates">
                {certificates.map((cert,index) =>(
                    <div className="certificate" key={index}>
                    <div className="certificatetitle">
                        <h3>{cert.title}</h3>
                    </div>
                    <div className="certificatedate">
                        <p>{cert.completiondate}</p>
                    </div>
                    <div className="certificatesource">
                        <p>{cert.source}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}