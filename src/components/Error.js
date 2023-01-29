import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
  return (
    <div className="error">
      <img
        src="https://img.freepik.com/free-vector/comic-speech-bubble-with-oops-text_1308-53484.jpg?w=2000"
        alt=""
      />

      <h1>Somethig went wrong......</h1>
      <h2>{err.status + ":" + err.statusText}</h2>
    </div>
  );
};

export default Error;
