class CreateAlternatives < ActiveRecord::Migration
  def change
    create_table :alternatives do |t|
      t.string :title
      t.text :description
      t.integer :problem_id

      t.timestamps null: false
    end
    add_index :alternatives, :problem_id
  end
end
