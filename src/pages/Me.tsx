import {
  Github,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  Twitter,
  X,
} from "lucide-react";
import Label from "../components/ui/label";

const Me = () => {
  return (
    <div className="content">
      <main style={{display:"flex",flexDirection:"column",gap:20}}>
        <Label>
          Hello 👋
          <br />
          I'm Mohammed Mahi 🧑‍💻
        </Label>
        <Label>Full Stack Web Developer | Laravel & React Specialist</Label>
        <Label>
          I craft modern, responsive, and scalable web applications using
          powerful tools like Laravel, React.js, and Tailwind CSS. I focus on
          building clean UI, secure backend systems, and smooth user experiences
          — from concept to deployment.
        </Label>
      </main>
      <div className="icon-group">
        <Github className="icon" size={20} />
        <Twitter className="icon" size={20} />
        <Instagram className="icon" size={20} />
        <Linkedin className="icon" size={20} />
      </div>
    </div>
  );
};

export default Me;
