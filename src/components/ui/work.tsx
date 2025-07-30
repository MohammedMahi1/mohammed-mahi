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
      <Label style={{textWrap:"nowrap",width:"fit-content"}}>{title}</Label>
      <Link path={github}>
        <Github />
      </Link>
      <Link path={vimeo}>
      <Video />
      </Link>
    </div>
    {
      underline && 
    <hr style={{width:"100%"}}/>  

    }
    </div>
  );
};

export default Work;
