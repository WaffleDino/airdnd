class ChangeZipcodeDataTypeInCampaigns < ActiveRecord::Migration[6.1]
  def change
    change_column :campaigns, :zipcode, :string
  end
end
