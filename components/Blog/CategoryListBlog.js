import Link from "next/link";

const CategoryList = () => {
  const data = [
    {
      author: "Walter White",
    },
    {
      author: "Saul Goodman",
    },
    {
      author: "Walter White",
    },
    {
      author: "Hank Schrader",
    },
  ];
  return (
    <div>
      <ul className="list-none text-black">
        {data.map(function (el, i) {
          return (
            <li key={i} className="text-black font-light text-lg">
              <Link href={`#`}>{el.author}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryList;