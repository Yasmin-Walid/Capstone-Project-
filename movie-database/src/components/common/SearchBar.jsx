import { useForm } from "react-hook-form";
import FeatherIcon from "feather-icons-react";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center pb-5 pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center">
          <input
            {...register("search")}
            className="border-2 shadow-lg hover:shadow-lg rounded-xl w-96 h-10 focus:border-none	focus: outline-none font-mono text-slate-900 border-none"
            type="search"
            name="search"
            id="search"
          />
          <button className=" ml-2 flex align-center" type="submit">
            <FeatherIcon icon="search" />
            <p className="ml-2">Search</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
