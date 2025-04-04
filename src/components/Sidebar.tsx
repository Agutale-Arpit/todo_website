export default function Sidebar() {
  return (
    <div className="p-2 m-2 space-y-3 w-1/5">
      <div className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-pink-300">
        DSA
      </div>
      <div className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-emerald-600">Projects</div>
      <div className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-purple-600" >Learning</div>
    </div>
  )
}
