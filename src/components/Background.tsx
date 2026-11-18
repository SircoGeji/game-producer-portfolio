export default function PortfolioBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[oklch(0.14_0.035_295)]">
      <div className="absolute top-[-200px] left-[10%] h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute top-[30%] right-[-200px] h-[700px] w-[700px] rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-[-250px] left-[30%] h-[600px] w-[600px] rounded-full bg-indigo-400/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,#d8b4fe_1px,transparent_1px),
        linear-gradient(to_bottom,#d8b4fe_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />
    </div>
  );
}
