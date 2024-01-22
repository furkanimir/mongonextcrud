import Link from "next/link";


export default function Navbar() {

    return(
        <nav className="flex justify-between items-center bg-gradient-to-tr from-slate-500 to-blue-500 px-8 py-5">
            <Link className="text-white font-bold" href={"/"}>Home</Link>
            <Link className="bg-gradient-to-br from-green-500 to-blue-300 text-white p-2" href={"/addTopic"}>Add Topic</Link>
            {/* <Link className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-2" href={"/addTopic"}>Add Topic</Link> */}
        </nav>
    );
}