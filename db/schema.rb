# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160728140317) do

  create_table "algorithms", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "alternatives", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "problem_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "alternatives", ["problem_id"], name: "index_alternatives_on_problem_id"

  create_table "criterions", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "priority"
    t.integer  "problem_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "criterions", ["problem_id"], name: "index_criterions_on_problem_id"

  create_table "decisions", force: :cascade do |t|
    t.string   "username"
    t.string   "rating"
    t.text     "comment"
    t.integer  "criterion_id"
    t.integer  "alternative_id"
    t.integer  "agreed_decision_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "decisions", ["alternative_id"], name: "index_decisions_on_alternative_id"
  add_index "decisions", ["criterion_id"], name: "index_decisions_on_criterion_id"

  create_table "problems", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "creator"
    t.integer  "algorithm_id"
    t.boolean  "obligatoryComments"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "problems", ["algorithm_id"], name: "index_problems_on_algorithm_id"

end
