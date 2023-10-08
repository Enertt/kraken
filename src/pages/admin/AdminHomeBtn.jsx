import {useNavigate} from "react-router-dom";

const AdminHomeBtn = () => {
    const navigate = useNavigate();

    return (
        <div style={{width: '100%', padding: 16}}>
            <button onClick={() => navigate('/admin')}>
                Admin home
            </button>
        </div>
    );
};

export default AdminHomeBtn;
