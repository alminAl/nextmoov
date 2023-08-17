export default function Template({ children }) {
  return (
    <>
      <div className="h-screen flex items-stretch ">
        <main className="self-center mx-auto">{children}</main>
      </div>
    </>
  );
}
