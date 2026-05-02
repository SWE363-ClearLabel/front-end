import { useState } from 'react'
import UserDashboard from './components/MainUserPage'
import MainPanelCorporate from './components/MainPanelCorporate' 
import AdminDisplayer from './AdminDisplayer' 
import MainPanelGuest from './components/MainPanelGuest' 

function CurrentPanel(){

	const [ Current , SetCurrent ] = useState( () => MainPanelGuest) ;

	return (
		<Current setCurrentPanel = {SetCurrent} />
	);
}

export default CurrentPanel 
