import Image from "next/image";

function Card({
  title,
  discription,
  path,
  difficulty,
  isFinished,
}: {
  title: string;
  discription: string;
  path: string;
  difficulty: string;
  isFinished: boolean;
}) {
  return (
    <a className="lg:col-span-4 md:col-span-6 col-span-12" href={path}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          <div
            className={`${isFinished ? "bg-sky-600" : "bg-orange-500"} min-w-2`}
          ></div>
          <div className="p-6">
            <h2 className="font-bold text-md relative z-10">{title}</h2>
            <p className="h-16 font-normal text-md text-gray-700 relative z-10 my-4">
              {discription}
            </p>
            <div className="flex gap-1 items-center">
              <Image
                height={16}
                width={16}
                src={`/${difficulty}.svg`}
                alt={difficulty}
              ></Image>
              <div className="">·</div>
              <div className="min-h-4 text-sm">{difficulty}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
