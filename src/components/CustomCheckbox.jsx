import PropTypes from 'prop-types';

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 cursor-pointer bg-white border-2 focus:outline-none checked:bg-blue-300 checked:border-blue-300 appearance-none border rounded 
      checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjIwIDYgOSAxNyA0IDEyIj48L3BvbHlsaW5lPjwvc3ZnPg==')] checked:bg-no-repeat checked:bg-center checked:bg-[length:16px_16px]"
    />
  );
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomCheckbox;
