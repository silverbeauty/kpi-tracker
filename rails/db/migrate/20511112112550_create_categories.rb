class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.integer :kpi_period
      t.integer :kpi_quantity_goal

      t.timestamps
    end
  end
end
