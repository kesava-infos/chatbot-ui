import { useAuth } from "../config/AuthContext";
import ButtonField from "../components/common/ButtonField";
function Dashboard() {
  const { logout } = useAuth();
  return <div>Dashboard</div>;
}

export default Dashboard;
