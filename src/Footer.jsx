import "./index.css"; 

export const Footer = () => { 
    const year = new Date().getFullYear(); 
    return ( 
    <footer className="footer"> 
    <div className="footer-inner"> 
        <span className="footer-name">Warishah Murtaza</span> 
        <span className="footer-copy">© {year} — Built with React</span> 
        <a href="#admin" className="footer-admin">admin</a> 
        </div> 
    </footer> 
    ); 
};
