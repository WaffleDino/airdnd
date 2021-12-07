class CreateUserCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :user_characters do |t|
      t.integer :user_id
      t.integer :char_id

      t.timestamps
    end
  end
end
