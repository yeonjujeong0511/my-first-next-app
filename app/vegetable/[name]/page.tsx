import Link from "next/link";

type PageParams = {
  name: string;
};

const name = ({ params }: { params: PageParams }) => {
  console.log(params.name);
  return (
    <div>
      <h2>Hello</h2>
      <Link href="/">main page</Link>
      <h3>{params.name}</h3>
    </div>
  );
};

export default name;
