import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-zinc-200">
      <h1 className="mb-5 text-5xl font-extrabold">Oops!</h1>
      <p className="mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="font-light text-gray-600">
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
