import { useAuth } from "../config/AuthContext";
function Dashboard() {
    const { logout } = useAuth();
  return (
    <div>

      Dashboard
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
