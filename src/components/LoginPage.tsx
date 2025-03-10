import SignIn from "./auth/SignIn";

function LoginPage() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex justify-center w-2/3">
        <div>TODO Application</div>
      </div>
      <div className="flex justify-center w-1/3">
        <SignIn />
      </div>
    </div>
  )
}

export default LoginPage
