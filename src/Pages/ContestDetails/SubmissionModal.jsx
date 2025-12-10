import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const SubmissionModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (!isOpen) return null;

  const handleFormSubmit = (data) => {
    onSubmit(data.submissionLink);
    reset();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-2xl font-bold">Submit Your Task</h3>
        <p className="py-4">
          Please provide the link to your submitted work (e.g., Google Drive
          link, GitHub repo, website URL, etc.).
        </p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Link/URL</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Paste your submission link here..."
              {...register("submissionLink", { required: true })}
            ></textarea>
            {errors.submissionLink && (
              <span className="mt-1 text-sm text-red-600">
                Submission link is required
              </span>
            )}
          </div>
          <div className="modal-action mt-6">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

SubmissionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SubmissionModal;
