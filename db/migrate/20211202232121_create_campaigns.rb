class CreateCampaigns < ActiveRecord::Migration[6.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :version
      t.integer :num_of_players
      t.string :meetup_day
      t.time :meetup_time
      t.string :char_level_range
      t.integer :host_id
      t.integer :dm_id
      
      

      t.timestamps
    end
  end
end
2