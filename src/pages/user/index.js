import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function User() {
    let p = useParams()
    const [user, setUser] = useState({})
    useEffect(() =>
        fetch('http://localhost:3000/users/' + Number(p.id))
            .then(response => response.json())
            .then(json => setUser(json))
        , [p.id])
    const baseUrl = "http://localhost:3000/images/"
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">User</h1>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img className="w-100" src={baseUrl + user.profilePic} alt="..." />
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="card-title">{user.firstname + " " + user.lastname} </h5>
                                    <p className="card-text">{user.email}</p>
                                    <p className="card-text">{user.contact}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default User;