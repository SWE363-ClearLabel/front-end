import { useState } from 'react'
import UserHome from './components/UserHome'
import MainPanelCorporate from './components/MainPanelCorporate' 
import AdminDisplayer from './AdminDisplayer' 

function CurrentPanel(){

	const [ Current , SetCurrent ] = useState( () =>AdminDisplayer ) ;

	return (
		<Current />
	);
}

export default CurrentPanel 
