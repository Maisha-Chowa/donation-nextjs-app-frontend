import Sidebar from "@/components/shares/SideBar";
import { getUserByEmail } from "@/utils/actions/create-user";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.email);
  // const userIfo = await getUserSearch("email", user?.email);
  const userIfo = await getUserByEmail(user?.email);
  const role = userIfo?.data[0]?.role;
  console.log(role);
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <Sidebar role={role}>{children}</Sidebar>
    </div>
  );
};
// role={role}

export default DashboardLayout;
