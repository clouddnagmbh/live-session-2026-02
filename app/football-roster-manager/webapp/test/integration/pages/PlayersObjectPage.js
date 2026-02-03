sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'my.football.roster.footballrostermanager',
            componentId: 'PlayersObjectPage',
            contextPath: '/Teams/players'
        },
        CustomPageDefinitions
    );
});