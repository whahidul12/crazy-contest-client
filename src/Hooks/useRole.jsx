import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Use TanStack Query to fetch role only if user is logged in
  const {
    data: role = "Normal User",
    isLoading: isRoleLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "userRole"],
    enabled: !loading && !!user?.email, // Only run if user is not loading and email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      // Role will be one of: 'Admin', 'Contest Creator', or 'Normal User'
      return res.data.role;
    },
  });

  return [role, isRoleLoading, refetch];
};

export default useRole;
