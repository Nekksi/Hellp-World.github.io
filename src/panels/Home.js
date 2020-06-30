import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Sliders from '../components/Sliders';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import './Home.css';

const Home = ({ id, snackbarError, fetchedState }) => {

	return (
		<Panel id={id}>
			<Fragment>
				<Group>
					<div class="PanelHeader__content"><div class="PanelHeaderContent PanelHeaderContent--ios"><div class="PanelHeaderContent__before"></div><div class="PanelHeaderContent__in"><div class="PanelHeaderContent__children"><span class="PanelHeaderContent__children-in">R6S CLUB APP</span></div><div class="PanelHeaderContent__width"></div></div></div></div>
			<PanelHeader	
			KarazhaMusic
			/>
			{fetchedState && <Sliders fetchedState={fetchedState} snackbarError={snackbarError} />};
					<div class="Tabs Tabs--ios Tabs--default">
						<div class="Tabs__in"><div role="button" class="Tappable Tappable--ios TabsItem TabsItem--ios TabsItem--selected Tappable--inactive"><div class="TabsItem__in">Поиск</div></div><div role="button" class="Tappable Tappable--ios TabsItem TabsItem--ios Tappable--inactive"><div class="TabsItem__in">Топ</div></div><div role="button" class="Tappable Tappable--ios TabsItem TabsItem--ios Tappable--inactive"><div class="TabsItem__in">О приложении</div></div></div>
					</div>
				</Group>
			</Fragment>
		</Panel>
	);
};

export default Home;
