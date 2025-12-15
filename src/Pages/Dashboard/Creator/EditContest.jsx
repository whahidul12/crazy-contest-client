import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

const contestTypes = [
  "Image Design",
  "Article Writing",
  "Business Idea",
  "Gaming Review",
  "Coding Challenge",
  "Other",
];

const EditContest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [deadline, setDeadline] = useState(null);

  // 1. Fetch Contest Data to pre-fill
  const { data: contest = {}, isLoading: isContestLoading } = useQuery({
    queryKey: ["contestToEdit", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      if (res.data.status !== "Pending") {
        // Deny edit if not pending
        Swal.fire(
          "Denied",
          "You can only edit contests that are pending approval.",
          "error",
        );
        navigate("/dashboard/my-created-contests");
        return {};
      }
      return res.data;
    },
  });

  // 2. Set form values once data is fetched
  useEffect(() => {
    if (contest._id) {
      setValue("name", contest.name);
      setValue("image", contest.image);
      setValue("description", contest.description);
      setValue("price", contest.price);
      setValue("prizeMoney", contest.prizeMoney);
      setValue("taskInstruction", contest.taskInstruction);
      setValue("type", contest.type);
      setDeadline(new Date(contest.deadline));
    }
  }, [contest, setValue]);

  if (isContestLoading)
    return <span className="loading loading-spinner loading-lg"></span>;
  if (!contest._id)
    return (
      <p className="text-error text-center">
        Contest not found or editing is denied.
      </p>
    );

  const onSubmit = (data) => {
    if (!deadline) {
      return Swal.fire("Error", "Please select a contest deadline.", "error");
    }

    const updatedContest = {
      name: data.name,
      image: data.image,
      description: data.description,
      price: parseFloat(data.price),
      prizeMoney: parseFloat(data.prizeMoney),
      taskInstruction: data.taskInstruction,
      type: data.type,
      deadline: deadline.toISOString(),
      // Status remains Pending
    };

    axiosSecure
      .put(`/contests/${id}`, updatedContest)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Contest Updated!",
            text: "Your contest details have been updated.",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/dashboard/my-created-contests");
        } else {
          Swal.fire("Info", "No changes detected or update failed.", "info");
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "Failed to update contest.", "error");
      });
  };

  return (
    <div>
      <Helmet>
        <title>ContestHub | Edit Contest</title>
      </Helmet>
      <h2 className="mb-6 text-3xl font-bold">Edit Contest: {contest.name}</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-base-100 rounded-xl p-6 shadow-xl"
      >
        {/* Row 1: Name, Type, Price, Prize Money (Using same fields as AddContest) */}
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

        {/* Other rows (Image URL, Price/Prize, Descriptions) */}
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
            Update Contest
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContest;
