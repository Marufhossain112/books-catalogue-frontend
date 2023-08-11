import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toastify() {
    const notify = () => toast("Hello");
    return (
        <div>
            <button onClick={notify}>Notify!</button>
        </div>
    );
}