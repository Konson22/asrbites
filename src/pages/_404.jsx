import { Link } from "react-router-dom";


export default function Notfound() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="">
            <p className="text-4xl mb-5">Page NOT FOUND 404</p>
            <Link className="px-5 py-2 bg-cl5 text-white" to='/'>Go to main page</Link>
        </div>
    </div>
  )
}
