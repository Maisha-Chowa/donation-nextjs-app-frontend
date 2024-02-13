"use server";

export const createUser = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};

export const getAllUser = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user`, {
    method: "GET",
    cache: "no-cache",
  });
  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};

export const getUserByEmail = async (email: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user/${email}`, {
    method: "GET",
    cache: "no-cache",
  });
  return res.json();
};

export const updateUserInfo = async (id: string, data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};

// export const getUserSearch = async (key: string, value: string) => {
//   console.log(key, value);
//   console.log(`${process.env.BACKEND_URL}/user?${key}=${value}`);
//   const res = await fetch(
//     `${process.env.BACKEND_URL}/user?${key}=${value} )}`,
//     {
//       method: "GET",
//       cache: "no-cache",
//     }
//   );
//   const userSearchInfo = await res.json();
//   console.log(userSearchInfo);
//   return userSearchInfo;
// };
