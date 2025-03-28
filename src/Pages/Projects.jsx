import WorkCardRight from "../components/WorkCardRight";
import WorkCardLeft from "../components/WorkCardLeft";

const projects = [
  { image: "/van-gogh-night.webp", name: "Movie Search Site", align: "left" },
  { image: "/savis_cake.png", name: "Savis's Cake", align: "right" },
];

function Projects({ worksRef }) {
  return (
    <div ref={worksRef} className="flex flex-col items-center h-full pt-40 px-[5vw]">
      <h1 className="text-[#F5EEE6] text-5xl text-center font-bold mb-20 md:text-6xl">
        SELECTED WORKS
      </h1>

      {projects.map((project, index) =>
        project.align === "left" ? (
         <a href="https://bhav-05-fg.github.io/Movie-Search-App/"> 
         <WorkCardLeft key={index} image={project.image} name={project.name} />
         </a>
        ) : (
          <WorkCardRight key={index} image={project.image} name={project.name} />
        )
      )}
    </div>
  );
}

export default Projects;
