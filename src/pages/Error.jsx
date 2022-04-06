import { useNavigate } from "react-router-dom";
import { Header } from "../components";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container w-80 mx-auto">
        <img
          onClick={() => navigate(-1)}
          src="/assets/error.svg"
          alt="Error"
          className="error-img img-responsive cursor"
        />
      </div>
    </>
  );
};
