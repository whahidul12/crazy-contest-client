import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const contestTypes = [
  "Image Design",
  "Article Writing",
  "Business Idea",
  "Gaming Review",
  "Coding Challenge",
  "Other",
];

const AddContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [deadline, setDeadline] = useState(null);

  const onSubmit = (data) => {
    if (!deadline) {
      return Swal.fire("Error", "Please select a contest deadline.", "error");
    }

    const newContest = {
      name: data.name,
      image: data.image,
      description: data.description,
      price: parseFloat(data.price), // Entry Fee
      prizeMoney: parseFloat(data.prizeMoney),
      taskInstruction: data.taskInstruction,
      type: data.type,
      deadline: deadline.toISOString(), // Convert Date object to ISO string
      creatorEmail: user.email,
      creatorName: user.displayName,
      status: "Pending", // Default status
      participantsCount: 0,
      creationDate: new Date().toISOString(),
    };

    axiosSecure
      .post("/contests", newContest)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          setDeadline(null);
          Swal.fire({
            icon: "success",
            title: "Contest Added!",
            text: "Your contest is pending approval by the Admin.",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "Failed to add contest.", "error");
      });
  };

  return (
    <div>
      <Helmet>
        <title>ContestHub | Add Contest</title>
      </Helmet>
      <h2 className="mb-6 text-3xl font-bold">Add New Contest</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-base-100 rounded-xl p-6 shadow-xl"
      >
        {/* Row 1: Name, Type, Price, Prize Money */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Contest Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Summer Design Challenge"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contest Type</span>
            </label>
            <select
              defaultValue=""
              {...register("type", { required: true })}
              className="select select-bordered"
            >
              <option value="" disabled>
                Select Type
              </option>
              {contestTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.type && (
              <span className="text-sm text-red-500">Type is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect
              minDate={new Date()}
              placeholderText="Select deadline"
              className="input input-bordered w-full"
            />
            {!deadline && (
              <span className="text-sm text-red-500">Deadline is required</span>
            )}
          </div>
        </div>

        {/* Row 2: Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contest Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            {...register("image", { required: true })}
            className="input input-bordered"
          />
          {errors.image && (
            <span className="text-sm text-red-500">Image URL is required</span>
          )}
        </div>

        {/* Row 3: Price and Prize Money */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Entry Fee ($)</span>
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="e.g., 5.00"
              {...register("price", { required: true, min: 0 })}
              className="input input-bordered"
            />
            {errors.price && (
              <span className="text-sm text-red-500">
                Valid entry fee is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Prize Money ($)</span>
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="e.g., 500.00"
              {...register("prizeMoney", { required: true, min: 0 })}
              className="input input-bordered"
            />
            {errors.prizeMoney && (
              <span className="text-sm text-red-500">
                Valid prize money is required
              </span>
            )}
          </div>
        </div>

        {/* Row 4: Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contest Description</span>
          </label>
          <textarea
            placeholder="Brief summary of the contest..."
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">
              Description is required
            </span>
          )}
        </div>

        {/* Row 5: Task Instruction */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Instructions</span>
          </label>
          <textarea
            placeholder="Detailed instructions for participants..."
            {...register("taskInstruction", { required: true })}
            className="textarea textarea-bordered h-36"
          ></textarea>
          {errors.taskInstruction && (
            <span className="text-sm text-red-500">
              Task instructions are required
            </span>
          )}
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add Contest
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContest;
