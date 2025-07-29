
import Link from "./link";

export type WorkProps = {
  id: number;
  title: string;
  discription: string;
  thumbnail?: string;
  path: string;
};
const Work = ({ discription, path, thumbnail, title,id }: WorkProps) => {
  return (
    <div key={id} className="work">
      {thumbnail ? <div className="skeleton" /> : <div className="skeleton" />}
    <div  style={{display:"flex",flexDirection:"column",gap:12}}>
              <Link path={path}>{title}</Link>
      <span>{discription}</span>
    </div>
    </div>
  );
};

export default Work;
