require 'rails_helper'

describe Friend do

  it { should belong_to :user }
  it {should have_many :interactions}

  it { should have_valid(:first_name).when("Matty") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:user).when(User.new) }
  it { should_not have_valid(:user).when(nil) }

end
