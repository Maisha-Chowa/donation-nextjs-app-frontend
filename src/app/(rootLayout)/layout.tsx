import Footer from "@/components/shares/Footer";
import Navbar from "@/components/shares/Navbar";
import { createUser } from "@/utils/actions/create-user";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import { message } from "antd";

const WithRootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  type TForm = {
    username: string;
    email: string;
    password: string;
  };

  const session = await getServerSession(authOptions);
  console.log(session?.user);
  const user = session?.user;
  console.log(user?.email);
  const data = {
    username: user?.name,
    email: user?.email,
    password: "",
  };
  const res = await createUser(data);
  return (
    <div>
      <Navbar session={session ? true : false} />
      {children}
      <Footer />
    </div>
  );
};

export default WithRootLayout;
