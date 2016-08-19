class CreateCriterions < ActiveRecord::Migration
  def change
    create_table :criterions do |t|
      t.string :title
      t.text :description
      t.integer :priority
      t.integer :problem_id

      t.timestamps null: false
    end
    add_index :criterions, :problem_id
  end
end
