import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import MintPage from './pages/Mint';
import OnePage from './pages/OnePage';

import Wallet from './components/Wallet';
import {WalletBalanceProvider} from "./hooks/useWalletBalance";


function App() {
	return (
		<Wallet>
			<WalletBalanceProvider>
				<BrowserRouter>
					<Switch>
						<Route exact={true} path="/" component={OnePage}/>
						<Route exact={true} path="/mint" component={MintPage}/>
						<Redirect from="*" to="/"/>
					</Switch>
				</BrowserRouter>
			</WalletBalanceProvider>
		</Wallet>

	);
}

export default App;
