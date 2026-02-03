using {
    cuid,
    managed
} from '@sap/cds/common';

namespace my.football.roster;

entity Teams : cuid, managed {
    city       : String(100);
    name       : String(100);
    conference : String(3) enum {
        AFC;
        NFC;
    }
    division   : String(10) enum {
        North;
        South;
        East;
        West;
    }
    players    : Composition of many Players
                     on players.team = $self;
}

entity Players : cuid, managed {
    firstName    : String(100);
    lastName     : String(100);
    jerseyNumber : Integer;
    position     : String(3) enum {
        QB;
        RB;
        WR;
        TE;
        OL;
        DL;
        LB;
        CB;
        S;
        K;
        P;
    };
    team         : Association to Teams;
}
