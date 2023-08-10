import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();

  return error.status === 404 ? (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-zinc-200">
      <h1 className="mb-5 text-5xl font-extrabold">Oops!</h1>
      <p className="mb-5">It looks like this page doesn't exist...</p>
      <p className="font-light text-gray-600">
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
      <Link to={"/"}>
        <br />
        <p className="">
          <i className="p-2 transition-all border border-solid rounded-md border-zinc-700 bg-zinc-50 hover:bg-zinc-200">
            Back to topics
          </i>
        </p>
      </Link>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-zinc-200">
      <h1 className="mb-5 text-5xl font-extrabold">Oops!</h1>
      <p className="mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="font-light text-gray-600">
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
      <br />
      <p className="p-2 transition-all border border-solid rounded-md border-zinc-700 bg-zinc-50 hover:bg-zinc-200">
        <a
          href="https://forms.gle/96Q97u1EPog3BiLU7"
          target="_blank"
          rel="noreferrer"
        >
          <i>Submit Bug Report</i>
        </a>
      </p>
      <Link to={"/"}>
        <br />
        <p className="">
          <i className="p-2 transition-all border border-solid rounded-md border-zinc-700 bg-zinc-50 hover:bg-zinc-200">
            Back to topics
          </i>
        </p>
      </Link>
    </div>
  );
}
