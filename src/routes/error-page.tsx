import { useRouteError } from "react-router-dom";

type errorType = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError() as errorType;
  console.error(error);

  return (
    <div>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
