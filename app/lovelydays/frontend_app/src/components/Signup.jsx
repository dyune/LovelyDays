export default function Signup() {

  return <>
    <div className="hero bg-base-100 flex-grow">
      <div className="hero-content lg:flex-row-reverse">
        <div className="text-center px-9 lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now and start creating!</h1>
          <p className="py-6">
            Build your first advent calendar with lovelyDays!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <input type="password" placeholder="confirm password" className="input input-bordered" required/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}