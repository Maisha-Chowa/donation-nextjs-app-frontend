"use client";

import { Button, Layout, Menu, Typography } from "antd";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/images/logo.png";

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
      <Header className="flex items-center bg-blue-950 h-[120px]">
        <Content className="flex flex-row  mt-12">
          <Image className="drop-shadow-2xl h-[2%] w-[20%]" src={logo} alt="" />
          <Link href="/">
            <Title className="m-0 text-2xl lg:pt-8">
              <p className="m-0 ml-2  text-amber-400 font-bold ">
                Next Donations
              </p>
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden bg-blue-950"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item className="text-white text-lg" key={item.href}>
              <Link className="text-amber-400" href={item.href}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}

          {session ? (
            <>
              <Menu.Item key="5">
                <Link href="/dashboard">Dashboard</Link>
              </Menu.Item>

              <Button
                className="ml-4 bg-amber-400 text-lg pb-2"
                ghost
                size="large"
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
              className="ml-4  bg-amber-400 text-lg pb-2"
              ghost
              size="large"
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
