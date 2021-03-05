import { useState, useEffect } from 'react';
import './index.css'
import Row from '../../components/row'
function Home() {
    const [users, setUsers] = useState([])
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [contact, setContact] = useState('')
    const [profilePic, setProfilePic] = useState('')
    useEffect(() =>
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(json => setUsers(json))
        , [])
    const [form, setForm] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Hello");
    }



    return (
        <>
            <button className="btn btn-primary" onClick={() => setForm(true)}>Add</button>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row users={users} />
                    </tbody>
                </table>
            </div>
            {
                form ?
                    <div className="form-wrapper">
                        <div className="form-inner">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col -md-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname} class="form-control" placeholder="First Name" />
                                            <label>First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastname} className="form-control" placeholder="Last Name" />
                                            <label>Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={(e) => setUserName(e.target.value)} value={username} class="form-control" placeholder="User Name" />
                                            <label>User Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email" />
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3">
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} class="form-control" placeholder="Password" />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select" onChange={(e) => setRole(e.target.value)} value={role} aria-label="User Role">
                                                <option selected>Select a Role</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <label>Please Select Role</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={(e) => setContact(e.target.value)} value={contact} class="form-control" placeholder="Contact" />
                                            <label>Contact</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-floating">
                                            <input onChange={(e) => setProfilePic(e.target.value)} value={profilePic} class="form-control" type="file" />
                                            <label>Upload a picture</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="form-floating">
                                            <input class="btn btn-success d-block w-100" type="submit" value="Save New User" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="btn btn-danger bt-close" onClick={() => setForm(false)}><i class="bi bi-x-circle"></i></div>
                    </div>
                    : ''
            }
        </>
    )
}




export default Home;