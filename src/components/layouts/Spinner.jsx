import spinner from "./assets/spinner.gif";

function Spinner() {
  return (
    <>
      <img
        src={spinner}
        alt="loading...."
        width={180}
        className="mx-auto text-center m-10"
      ></img>
    </>
  );
}

export default Spinner;
