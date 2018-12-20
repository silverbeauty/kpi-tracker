class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.references :user, foreign_key: true
      t.references :category, foreign_key: true
      t.text :notes
      t.timestamp :task_finished_at
      t.integer :kpi_point

      t.timestamps
    end
  end
end
