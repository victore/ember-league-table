import DS from 'ember-data';

export default DS.Model.extend({
  homeTeam: DS.belongsTo('team', { inverse: 'homeGames'}),
  awayTeam: DS.belongsTo('team', { inverse: 'awayGames'}),
  homeGoal: DS.attr('number'),
  awayGoal: DS.attr('number'),
  playedOn: DS.attr('date')
});
