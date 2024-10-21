import HomeNavbar from "./HomeNavbar.jsx";

export default function Homepage() {
  return <>
    <HomeNavbar></HomeNavbar>
    <div className="hero bg-base-FFFFF min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-sans font-bold">Lovely Days &lt;3</h1>
          <p className="py-6 font-serif">
            create an advent calendar for your loved ones
          </p>
          <button className="btn btn-primary">create a calendar</button>
        </div>
      </div>
    </div>
  </>
}