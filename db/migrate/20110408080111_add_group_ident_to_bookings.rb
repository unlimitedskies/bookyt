class AddGroupIdentToBookings < ActiveRecord::Migration
  def self.up
    add_column :bookings, :group_ident, :string
  end

  def self.down
    remove_column :bookings, :group_ident
  end
end
