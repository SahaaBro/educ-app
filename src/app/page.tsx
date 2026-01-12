import AddUserForm from "@/components/pages/users/addUserForm";
import UsersList from "@/components/pages/users/usersList";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Landing Page</h1>
      <AddUserForm />
      {/* <UsersList /> */}
    </div>
  );
}
