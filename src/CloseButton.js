import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: 'Close',
};

<<<<<<< HEAD
class CloseButton extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button
        type="button"
        className="close"
        onClick={onClick}
      >
        <span aria-hidden="true" className="pi-times"></span>
        <span className="sr-only">{label}</span>
      </button>
    );
  }
}
=======
const CloseButton = React.forwardRef(
  ({ label, onClick, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={classNames('close', className)}
      onClick={onClick}
      {...props}
    >
      <span aria-hidden="true">&times;</span>
      <span className="sr-only">{label}</span>
    </button>
  ),
);
>>>>>>> 49a4563306c967cc6239b53a6a01dd2fa4bb6c64

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
