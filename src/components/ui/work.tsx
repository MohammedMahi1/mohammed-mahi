import { ArrowRight, Github, Video } from "lucide-react";
import Label from "./label";
import Link from "./link";

export type WorkProps = {
  id: number;
  title: string;
  github: string;
  vimeo: string;
  underline:boolean
};
const Work = ({ github, vimeo, title, id,underline }: WorkProps) => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
          <div key={id} className="work">
      <ArrowRight />
      <a href={github} className="link" target="_blank">
      <Label style={{width:"fit-content",cursor:"pointer"}} className="hover-underline work-title">{title}</Label>
      </a>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:12}}>
              <Link path={github}>
        <Github />
      </Link>
      <Link path={vimeo}>
      <Video />
      </Link>
      </div>
    </div>
    {
      underline && 
    <hr style={{width:"100%"}}/>  

    }
    </div>
  );
};

export default Work;
