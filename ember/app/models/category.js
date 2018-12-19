import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    kpi_period: DS.attr('string'),
    kpi_quantity_goal: DS.attr('string'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date')
});
