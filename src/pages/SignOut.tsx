import { useNavigate } from "react-router-dom";
export default function SignOut() {
    const navigate = useNavigate();
    // useEffect(()=>{},[])
    setTimeout(() => {
        navigate("/");
    }, 3000);
    return (
        <div className="flex justify-center items-center">
            <h2 className="font-semibold">Sign out successful.</h2>
        </div>
    );
}
