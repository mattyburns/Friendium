require 'rails_helper'

describe Interaction do

  it { should belong_to :friend }

  it { should have_valid(:type).when("Letter") }
  it { should_not have_valid(:type).when(nil, "") }

  it { should have_valid(:friend).when(Friend.new) }
  it { should_not have_valid(:friend).when(nil) }

end
