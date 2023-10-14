import CreateUserForm from "@styled-banners/components/create-user-form";
import prisma from "@styled-banners/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        users.map((user, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-full h-full bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Welcome to Styled Banners!</h1>
            <p className="text-xl font-semibold">This is the backoffice.</p>
          </div>
        ))
      }
      <CreateUserForm />
    </main>
  );
}
