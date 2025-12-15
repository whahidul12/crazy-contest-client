import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUserShield, FaCrown, FaUser } from "react-icons/fa";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch all users
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  const handleRoleChange = (user, newRole) => {
    Swal.fire({
      title: `Change role to ${newRole}?`,
      text: `Change ${user.name}'s role to ${newRole}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change Role!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/role/${user._id}`, { role: newRole })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                icon: "success",
                title: "Role Updated!",
                text: `${user.name} is now a ${newRole}.`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              error.message || "Failed to update role.",
              "error",
            );
          });
      }
    });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "Admin":
        return <FaCrown className="text-yellow-500" />;
      case "Contest Creator":
        return <FaUserShield className="text-blue-500" />;
      case "Normal User":
      default:
        return <FaUser className="text-gray-500" />;
    }
  };

  return (
    <div className="text-primary-dark dark:text-primary-light">
      <h2 className="mb-6 text-3xl font-bold">Manage Users ({users.length})</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-primary-dark dark:text-primary-light bg-secondary-o/50">
              <th className="">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            user.photo || "https://i.ibb.co/5GzXkwq/user.png"
                          }
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <div className="flex items-center gap-2 font-bold">
                    {getRoleIcon(user.role)} {user.role}
                  </div>
                </td>
                <td>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-xs btn-info"
                    >
                      Change Role
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
                    >
                      <li>
                        <button
                          onClick={() => handleRoleChange(user, "Admin")}
                          disabled={user.role === "Admin"}
                        >
                          Make Admin
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            handleRoleChange(user, "Contest Creator")
                          }
                          disabled={user.role === "Contest Creator"}
                        >
                          Make Creator
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleRoleChange(user, "Normal User")}
                          disabled={user.role === "Normal User"}
                        >
                          Make User
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
