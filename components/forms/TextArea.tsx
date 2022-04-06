type TextAreaProps = {
  labelText: string;
  labelFor: string;
  placeholder: string;
};

const TextArea = ({ labelText, labelFor, placeholder }: TextAreaProps) => {
  return (
    <>
      <label htmlFor={labelFor} className="block mb-1 text-sm text-neutral-600">
        {labelText}
      </label>
      <textarea
        className="w-full px-4 py-3 text-xs border-none bg-neutral-100 lg:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        name={labelFor}
        cols={20}
        rows={4}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
