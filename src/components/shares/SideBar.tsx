"use client";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Content, Sider } = Layout;

const Sidebar = ({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) => {
  // console.log(role);
  let userRole = false;
  if (role === "admin") {
    userRole = true;
  }
  console.log(userRole);
  const adminItems = [
    { key: "1", label: "Add Donation", href: "/admin/add-donation" },
    { key: "2", label: "Manage Donation", href: "/admin/manage-donation" },
    //{ key: "3", label: "Edit Donation", href: "/admin/edit-donation" },
    { key: "3", label: "Back Home", href: "/" },
  ];
  const userItems = [
    { key: "1", label: "My Donations", href: "/user/my-donations" },
    { key: "2", label: "Donation Statistics", href: "/user/statistics" },
    { key: "3", label: "Back Home", href: "/" },
  ];

  const pathname = usePathname();
  const getSelectedKey = () => {
    return adminItems.find((item) => item.href === pathname)?.key || "";
  };

  return (
    <Layout>
      <Content>
        <Layout className="lg:flex hidden">
          <Sider
            width={250}
            className="min-h-screen bg-pink-900 m-6 py-2 rounded-xl"
          >
            <Menu
              className="h-full px-3 font-semibold  bg-transparent py-1"
              mode="inline"
              defaultSelectedKeys={[getSelectedKey()]}
              selectedKeys={[getSelectedKey()]}
            >
              {userRole
                ? adminItems.map((item) => (
                    <Menu.Item key={item.key} className="text-white text-xl">
                      <Link href={item.href}>{item.label}</Link>
                    </Menu.Item>
                  ))
                : userItems.map((item) => (
                    <Menu.Item key={item.key} className="text-white text-xl">
                      <Link href={item.href}>{item.label}</Link>
                    </Menu.Item>
                  ))}
            </Menu>
          </Sider>
          <Content className=" p-6 pl-0 min-h-screen">{children}</Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Sidebar;
