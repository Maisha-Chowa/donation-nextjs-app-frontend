export const getAllDonations = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/donation`, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};
