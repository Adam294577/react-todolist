import PropTypes from 'prop-types';

const CancelSvg = ({ size = 'w5 h5' }) => {
  return (
    <div
      className={`flex-center ${size} c-gray-200 hover:c-blue-300 cursor-pointer transition-colors`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='wfull hfull'
        viewBox='0 0 24 24'
      >
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth={2}
          d='M6 18L18 6m0 12L6 6'
        ></path>
      </svg>
    </div>
  );
};

CancelSvg.propTypes = {
  size: PropTypes.string,
};

export default CancelSvg;
