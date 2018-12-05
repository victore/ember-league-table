import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  store: inject(),

  init() {
    this._super(...arguments);

    //console.log('Game sim...');

    this.seedTeams();

  },

  seedTeams() {
    let teamNames = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];

    for(let i=0; i<teamNames.length; i++) {
      this.store.createRecord('team', { id: i, name: teamNames[i] });
    }
  }

});
