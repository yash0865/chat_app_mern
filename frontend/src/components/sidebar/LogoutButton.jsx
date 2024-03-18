import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto '>
            <div>
                {!loading ? (
                    <CiLogout className='w-8 h-8 text-white cursor-pointer' onClick={logout} />
                ) : (
                    <span className='loading loading-spinner'></span>
                )}
            </div>

        </div>
    );
};
export default LogoutButton;