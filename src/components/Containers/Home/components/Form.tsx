import { FC } from 'react';

type FormType = {
  handleSubmit?: () => void;
};

const Form: FC<FormType> = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-10"
    >
      <input type="text" className="w-1/3 py-3 text-2xl px-5 rounded-lg" />
      <button
        type="submit"
        className="bg-pink-600 text-white text-4xl px-10 py-5 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
