import Ember from 'ember';

export default Ember.ObjectController.extend({
  skinTypes: [
    { type: "I – Light - Always burns, never tans; blonde or red hair; blue eyes",   max_unprotected_exposure_time: 67 }, 
    { type: "II – Fair - Usually burns, tans minimally; light skin and hair",        max_unprotected_exposure_time: 100 },
    { type: "III – Medium - Sometimes burns, tans; medium skin color",               max_unprotected_exposure_time: 200 },
    { type: "IV – Olive - Rarely burns, tans well; darker skin; brown eyes",         max_unprotected_exposure_time: 300 },
    { type: "V – Brown - Very rarely burns, deeply tans; brown skin",                max_unprotected_exposure_time: 400 },
    { type: "VI – Black - Never burns; deeply pigmented dark brown to black skin",   max_unprotected_exposure_time: 500 }
  ]
});
