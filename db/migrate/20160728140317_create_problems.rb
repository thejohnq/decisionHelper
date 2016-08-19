class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :title
      t.text :description
      t.string :creator
      t.integer :algorithm_id
      t.boolean :obligatoryComments

      t.timestamps null: false
    end
    add_index :problems, :algorithm_id
  end
end
