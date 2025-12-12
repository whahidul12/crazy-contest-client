import PropTypes from "prop-types";

const SubmissionCheck = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-2xl font-bold">View Submition</h3>
        <p className="py-4">
          Please check the link to Contestent submitted... (e.g., Google Drive
          link, GitHub repo, website URL, etc.).
        </p>

        <textarea
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Paste your submission link here..."
        ></textarea>
        <div className="modal-action mt-6">
          <button type="button" onClick={onClose} className="btn btn-error">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

SubmissionCheck.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SubmissionCheck;
