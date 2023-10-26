export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center py-2">
      <h1>Profile</h1>
      <hr />
      <h1 className="text-4xl">
        Profile Page
        <span className="p-2 mx-2 rounded bg-orange-400 text-black ">
          {" "}
          {params.id}
        </span>
      </h1>
    </div>
  );
}
