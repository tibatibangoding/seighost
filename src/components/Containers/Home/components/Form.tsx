import { FC } from 'react';

type FormType = {
  handleSubmit?: () => void;
};

const Form: FC<FormType> = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
