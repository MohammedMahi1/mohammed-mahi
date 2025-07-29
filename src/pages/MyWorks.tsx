import Work, { type WorkProps } from "../components/ui/work";

  const data:WorkProps[]= [
  {
    id: 1,
    title:"React Project & Laravel",
    discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium assumenda nostrum molestiae maiores, mollitia ab, at suscipit tenetur totam in pariatur tempora vel, optio beatae. Aliquam in iusto commodi?",
    path:"/",
    thumbnail:"dfv"
    },
];

const MyWorks = () => {

  return (
    <div className="content">
      {
      data.map((e) =>
          <Work
          id={e.id}
          discription={e.discription}
          title={e.title}
          path={e.path}
          thumbnail={e.thumbnail}
          />
        )
      }
    </div>
  );
};

export default MyWorks;
