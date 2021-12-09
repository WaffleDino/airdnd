class AddZipToCampaigns < ActiveRecord::Migration[6.1]
  def change
    add_column :campaigns, :zipcode, :string
  end
end
