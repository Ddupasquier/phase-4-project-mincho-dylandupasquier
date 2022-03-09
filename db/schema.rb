# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_09_201855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.bigint "park_id"
    t.string "name"
    t.index ["park_id"], name: "index_activities_on_park_id"
  end

  create_table "entrance_fees", force: :cascade do |t|
    t.string "cost"
    t.string "description"
    t.string "title"
    t.bigint "park_id"
    t.index ["park_id"], name: "index_entrance_fees_on_park_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "title"
    t.string "altText"
    t.string "caption"
    t.string "url"
    t.bigint "park_id"
    t.index ["park_id"], name: "index_images_on_park_id"
  end

  create_table "operatingHours", force: :cascade do |t|
    t.string "description"
    t.bigint "park_id"
    t.index ["park_id"], name: "index_operatingHours_on_park_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "latitude"
    t.string "longitude"
    t.string "states"
    t.string "directions"
    t.string "weatherInfo"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "city"
    t.string "state"
    t.string "phone"
    t.string "email"
    t.string "image"
  end

end
