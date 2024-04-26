export function Card({ title, content } : { title: string; content: string; }) {

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm mx-4 my-4">
      <div className="flex p-4">
        <h1 className="ml-2 text-xl font-medium">{title}</h1>
      </div>
      <p className={"truncate rounded-xl bg-white px-4 py-8 text-center"}>{content}</p>
    </div>
  );
}