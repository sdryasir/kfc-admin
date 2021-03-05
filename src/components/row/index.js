import {
    Link
} from "react-router-dom";
function Row(props) {
    let users = props.users;
    return (
        users.map(u => <tr key={u.id}>
            <td>{u.id}</td>
            <td><Link to={`/user/` + u.id}>{u.firstname}</Link></td>
            <td>{u.lastname}</td>
            <td>{u.username}</td>
            <td>{u.contact}</td>
            <td>
                <Link to={`/edit/` + u.id}><button className="btn btn-primary me-2"><i class="bi bi-pencil-square"></i></button></Link>
                <Link to={`/del/` + u.id}><button className="btn btn-danger"><i class="bi bi-trash"></i></button></Link>
            </td>
        </tr >)
    )
}
export default Row;