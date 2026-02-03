sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"my/football/roster/footballrostermanager/test/integration/pages/TeamsList",
	"my/football/roster/footballrostermanager/test/integration/pages/TeamsObjectPage",
	"my/football/roster/footballrostermanager/test/integration/pages/PlayersObjectPage"
], function (JourneyRunner, TeamsList, TeamsObjectPage, PlayersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('my/football/roster/footballrostermanager') + '/test/flp.html#app-preview',
        pages: {
			onTheTeamsList: TeamsList,
			onTheTeamsObjectPage: TeamsObjectPage,
			onThePlayersObjectPage: PlayersObjectPage
        },
        async: true
    });

    return runner;
});

