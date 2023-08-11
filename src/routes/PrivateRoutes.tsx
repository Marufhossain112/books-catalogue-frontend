import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

type IProps = {
    children: ReactNode;
};
export default function PrivateRoutes({ children }: IProps) {
    const { isLoggedIn } = useAppSelector((state) => state.persistedReducer);
    const { pathname } = useLocation();

    if (!isLoggedIn) {
        sessionStorage.setItem('previousPrivateRoute', pathname);
        return <Navigate to='/signin' />;
    }
    return children;
}
