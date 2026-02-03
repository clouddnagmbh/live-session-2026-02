using {my.football.roster as db} from '../db/schema';

service FootballRosterService {
    entity Teams   as projection on db.Teams;
    entity Players as projection on db.Players;
}
