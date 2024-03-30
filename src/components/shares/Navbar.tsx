"use client";

import { Button, Layout, Menu, Typography } from "antd";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/Logo.png";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Events", href: "/donations" },
  { key: "3", label: "About Us", href: "/about" },
  { key: "4", label: "Volunteer", href: "/volunteer" },
  { key: "5", label: "Contact Us", href: "/contact-us" },
];

const Navbar = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Layout className="layout shadow-lg">
      <Header className="flex items-center py-8 bg-white h-[100px]">
        <Content className="flex flex-row">
          <Image
            className="drop-shadow-2xl h-[2%] w-[20%] mx-4"
            src={logo}
            alt=""
          />
          <Link href="/">
            <Title className="m-0 text-2xl flex items-center">
              <p className="m-0 ml-2  text-pink-900">Next Donations</p>
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          {session ? (
            <>
              <Menu.Item key="5">
                <Link href="/dashboard">Dashboard</Link>
              </Menu.Item>

              <Button
                className="ml-4"
                ghost
                size="large"
                type="primary"
                danger
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              className="ml-4"
              ghost
              size="large"
              type="primary"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;

// "use client";

// import { Layout, Menu, Typography } from "antd";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const { Header, Content } = Layout;
// const { Title } = Typography;

// const items = [
//   { key: "1", label: "Home", href: "/" },
//   { key: "2", label: "Donations", href: "/donations" },
//   { key: "3", label: "Dashboard", href: "/dashboard" },
// ];

// const Navbar = () => {
//   const pathname = usePathname();

//   return (
//     <Layout className="layout shadow-lg">
//       <Header className="flex items-center py-8 bg-white ">
//         <Content>
//           <Link href="/">
//             <Title className="m-0 text-2xl flex items-center">
//               <p className="m-0 ml-2">Next Donations</p>
//             </Title>
//           </Link>
//         </Content>
//         <Menu
//           className="lg:block hidden"
//           disabledOverflow
//           mode="horizontal"
//           selectedKeys={[pathname]}
//         >
//           {items?.map((item) => (
//             <Menu.Item key={item.href}>
//               <Link href={item.href}>{item.label}</Link>
//             </Menu.Item>
//           ))}
//         </Menu>
//       </Header>
//     </Layout>
//   );
// };

// export default Navbar;
