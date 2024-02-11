import Sidebar from "@/components/shares/SideBar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
