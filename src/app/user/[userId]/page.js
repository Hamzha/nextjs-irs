export async function generateStaticParams() {
  // API CALL OR  DB CALL
  const userIds = [1, 2, 3, 4, 5, 6];
  return userIds.map((userId) => {
    return { userId: String(userId) };
  });
}

const page = ({ params }) => {
  return <div>{params.userId}</div>;
};

export default page;
