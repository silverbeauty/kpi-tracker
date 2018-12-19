import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    notes: DS.attr('string'),
    task_finish_at: DS.attr('date'),
    kpi_points: DS.attr('number'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date')
});
