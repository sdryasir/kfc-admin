import { useParams } from 'react-router-dom';
function EditUser() {
    let p = useParams()
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">User</h1>
                    </div>
                    <h1>Edit User {p.id}</h1>
                </main>
            </div>
        </div>
    )
}
export default EditUser