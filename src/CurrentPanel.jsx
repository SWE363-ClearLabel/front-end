import { useState } from 'react'
import UserHome from './components/UserHome'
import MainPanelCorporate from './components/MainPanelCorporate' 


function CurrentPanel(){

	const [ Current , SetCurrent ] = useState( () => MainPanelCorporate ) ;

	return (
		<Current />
	);
}

export default CurrentPanel 
