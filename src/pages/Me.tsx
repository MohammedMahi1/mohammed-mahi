import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Label from "../components/ui/label";
import Link from "../components/ui/link";
const Me = () => {
  return (
    <div className="content">
        <main style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Label>
            Hello 👋
            <br />
            I'm Mohammed Mahi 🧑‍💻
          </Label>
          <Label>Full Stack Web Developer | Laravel & React Specialist</Label>
          <Label>
            I craft modern, responsive, and scalable web applications using
            powerful tools like Laravel, React.js, and Tailwind CSS. I focus on
            building clean UI, secure backend systems, and smooth user
            experiences — from concept to deployment.
          </Label>
        </main>
      <div className="icon-group">
        <Link path="https://github.com/MohammedMahi1">
          <Github className="icon" size={20} />
        </Link>

        <Link path="https://www.linkedin.com/in/mohammed-mahi-96954828b/">
          <Linkedin className="icon" size={20} />
        </Link>
        <Link path="https://twitter.com/MohammedMahi012">
          <Twitter className="icon" size={20} />
        </Link>

        <Link path="https://www.instagram.com/_mahi_mohamed">
          <Instagram className="icon" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Me;
