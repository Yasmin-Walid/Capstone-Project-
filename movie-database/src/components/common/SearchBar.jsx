import { useForm } from "react-hook-form"

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {}

  return (
    <div className=" bg-pruble-100 flex justify-center pb-5 pt-5">
      Search

    </div>
  )
}

export default SearchBar