import { useState } from 'react';
import { useHistory } from "react-router-dom";

const adminEmail = "sdr.yasir@gmail.com"
const adminPass = "123@123"

function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let history = useHistory();

    const handleSubmit = (event) => {
        console.log("Handle submit function called ", email, password)
        event.preventDefault()
        if (adminEmail === email && adminPass === password)
            history.push('/home')
        else
            alert('Invalid username/password')
    }

    return (
        <div className="signin-wrapper">
            <main class="form-signin">
                <form onSubmit={handleSubmit}>
                    {/* <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                    <label for="inputEmail" class="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" class="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="Password" required />
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2021 Designed & Developed by: <a target="_blank" href="#">Yasir Ali</a></p>
                </form>
            </main>
        </div>
    )
}
export default Login;