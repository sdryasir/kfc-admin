import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
function DelUser() {
    let p = useParams()
    useEffect(() => {
        fetch('http://localhost:3000/users/' + Number(p.id), {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }, [p.id])
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">User</h1>
                    </div>
                    <h1>Del User {p.id}</h1>
                </main>
            </div>
        </div>
    )
}
export default DelUser