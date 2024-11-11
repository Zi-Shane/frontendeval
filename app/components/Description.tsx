function Description({ DescriptionList }: { DescriptionList: string[] }) {
  return (
    <div className="h-full overflow-auto">
      <ol className="text-lg lg:p-8 p-0">
        {DescriptionList.map((description, index) => (
          <li
            key={index}
            className="border-b border-gray-200 last:border-0 p-4 hover:bg-slate-50"
          >
            {description}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Description;
