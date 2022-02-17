import { toast } from 'react-toastify';

const toaster = (message = "", type = "") => {
    switch (type) {
        case "error":
            toast.error(message);
            break;
        case "info":
            toast.info(message); break;
        case "warning":
            toast.warn(message); break;

        case "success":
            toast.success(message); break;
        default: toast(message);
    }
}

export { toaster };
