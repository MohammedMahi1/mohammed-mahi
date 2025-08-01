import Work, { type WorkProps } from "../components/ui/work";

type Data = {} & Omit<WorkProps, "underline">;
const data: Data[] = [
  {
    id: 1,
    title: "Transport Job (React Ts & Laravel 12)",
    github: "https://github.com/MohammedMahi1/upwork_react_front_end",
    vimeo: "https://vimeo.com/1104929535",
  },
  {
    id: 2,
    title: "React Native with local first (ORM - Drizzle)",
    github: "https://github.com/MohammedMahi1/drizzle-local-app",
    vimeo: "https://vimeo.com/1106609499",
  },
];

const MyWorks = () => {
  return (
    <div className="content-work">
      {data.map((e) => (
        <Work
          id={e.id}
          github={e.github}
          title={e.title}
          vimeo={e.vimeo}
          underline={e.id < data.length ? true : false}
        />
      ))}
    </div>
  );
};

export default MyWorks;
