import WelcomeMessage from './WelcomeMessage';
import ToggleVisibility from './ToggleVisibility';
import UserStatus from './UserStatus';
import ShowComments from './ShowComments';
import AdminControls from './AdminControls';
import ProductStatus from './ProductStatus';
import WarningNotification from './WarningNotification';
import DarkModeToggle from './DarkModeToggle';
import SubscribeButton from './SubscribeButton';
import MoreInfo from './MoreInfo';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <ToggleVisibility />
      <UserStatus />
      <ShowComments />
      <AdminControls />
      <ProductStatus />
      <WarningNotification />
      <DarkModeToggle />
      <SubscribeButton />
      <MoreInfo />
      <Portfolio />
    </div>
  );
}

export default App;