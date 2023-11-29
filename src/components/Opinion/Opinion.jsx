import {useSelector} from "react-redux";

const Opinion = () => {
    const isConnected = useSelector((state) => state.auth.isLogged);

    return (
        <div>Opinion</div>
    )
}
export default Opinion
