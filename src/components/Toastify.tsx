import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toastify(message: string) {
    const notify = () => toast(message);
    return (
        <div>
            <button onClick={notify}>Notify!</button>
        </div>
    );
}