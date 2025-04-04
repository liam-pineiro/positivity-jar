import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
   <>
   <button class="dashboardjar-button"><NavLink to="/myjars">Jars</NavLink></button>
   <button class="dashboardaccount-button"><NavLink to ="/account">Account</NavLink></button>
   <button class="dashboardfriends-button">Friends</button>
   </>
   
    
)
};

export default Dashboard;