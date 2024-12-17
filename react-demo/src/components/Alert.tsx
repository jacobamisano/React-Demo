import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onAlertExit: () => void;
}

const Alert = ({ children, onAlertExit }: AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onAlertExit}
      ></button>
    </div>
  );
};

export default Alert;
