import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  // Fetch user stats from DB (Needs win percentage, etc.)
  const { data: userData = {}, refetch } = useQuery({
    queryKey: ["userProfile", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  // Chart Data Preparation
  const winPercentage = userData.winPercentage || 0;
  const lossPercentage = 100 - winPercentage;

  // Only show chart if they participated in at least one contest to avoid 0/0 confusion
  const hasParticipation = (userData.participatedCount || 0) > 0;

  const data = [
    { name: "Wins", value: winPercentage },
    { name: "Participation", value: lossPercentage },
  ];
  const COLORS = ["#00C49F", "#FFBB28"];

  const onSubmit = (data) => {
    updateUserProfile(data.name, data.photoURL)
      .then(() => {
        const updatedInfo = {
          name: data.name,
          photo: data.photoURL,
          address: data.address,
          // keep other fields same
        };
        axiosSecure.put(`/users/${user.email}`, updatedInfo).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire("Success", "Profile updated successfully", "success");
          }
        });
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Profile Edit Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 text-2xl">Edit Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control flex justify-center">
              <img
                src={user?.photoURL}
                // {...register("name")}
                className="w-1/2 rounded-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                {...register("name")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                defaultValue={user?.photoURL}
                {...register("photoURL")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Your address"
                defaultValue={userData.address}
                {...register("address")}
                className="input input-bordered"
              />
            </div>
            <button className="btn btn-primary mt-4">Update Profile</button>
          </form>
        </div>
      </div>

      {/* Stats Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body flex flex-col items-center justify-center">
          <h2 className="card-title mb-4 text-2xl">Contest Statistics</h2>
          <div className="h-64 w-full">
            {hasParticipation ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500">
                Participate in contests to see stats!
              </div>
            )}
          </div>
          <div className="stats mt-4 w-full shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Win Rate</div>
              <div className="stat-value text-secondary">{winPercentage}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
