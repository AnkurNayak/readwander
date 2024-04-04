/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ <FancyButton /> : BookDetailContainerMain 
/* ----------------------------------------------------------------------------------------------------- */
const FancyButton = ({ children, onClick, disabled }) => {
  return (
    <button
      className="bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] max-w-max rounded-lg px-8 py-2  text-white"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FancyButton;
