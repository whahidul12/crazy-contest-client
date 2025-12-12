import PropTypes from "prop-types";

const ensureProtocol = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

const SubmissionCheck = ({ isOpen, onClose, submissionLink }) => {
  if (!isOpen) return null;
  const externalLink = ensureProtocol(submissionLink);

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
          placeholder="Submission link not available"
          defaultValue={submissionLink}
          readOnly
        ></textarea>

        <div className="modal-action mt-6">
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info"
            disabled={!submissionLink}
          >
            Go to Submission
          </a>
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
  submissionLink: PropTypes.string,
};

export default SubmissionCheck;
