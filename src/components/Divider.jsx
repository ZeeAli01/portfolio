export default function Divider() {
  return (
    <div className="w-full my-12 flex items-center justify-center">
      <div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#32CD32] to-transparent"
        role="separator"
        aria-hidden="true"
      />
    </div>
  );
}
