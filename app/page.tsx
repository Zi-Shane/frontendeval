import { ProjectList } from "@/data/HomePage";
import Card from "./ui/Card";

export default function Home() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-12 gap-4">
        {ProjectList.map((v, k) => {
          return (
            <Card
              key={k}
              title={v.title}
              discription={v.description}
              path={v.path}
              difficulty={v.difficulty}
            />
          );
        })}
      </div>
    </div>
  );
}
