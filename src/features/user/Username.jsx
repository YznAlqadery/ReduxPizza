import { useSelector } from "react-redux";

export default function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold text-stone-100 md:block">
      {username}
    </div>
  );
}
