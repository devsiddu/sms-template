const TopBar = ({ name }: { name: string }) => {
  return (
    <div className="bg-primary-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TopBar;
