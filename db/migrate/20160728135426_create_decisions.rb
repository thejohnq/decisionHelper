class CreateDecisions < ActiveRecord::Migration
  def change
    create_table :decisions do |t|
      t.string :username
      t.string :rating
      t.text :comment
      t.integer :criterion_id
      t.integer :alternative_id
      t.integer :agreed_decision_id

      t.timestamps null: false
    end
    add_index :decisions, :criterion_id
    add_index :decisions, :alternative_id
  end
end
