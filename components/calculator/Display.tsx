interface DisplayProps {
  expression: string;
  result: string;
}

export default function Display({
  expression,
  result,
}: DisplayProps) {
  return (
    <div className="bg-slate-900 text-white p-4 rounded-xl min-h-[20px]">
      <div className="text-xl text-gray-400 break-all">
        {expression || "0"}
      </div>

      <div className="text-xl font-bold mt-3 break-all">
        {result}
      </div>
    </div>
  );
}