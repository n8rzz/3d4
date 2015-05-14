require 'rails_helper'

describe User do

  it 'has a valid factory' do
    expect(build(:user)).to be_valid
  end


  let(:user) { FactoryGirl.create :user }

  describe 'Validations' do
    it { expect(user).to validate_presence_of(:username) }
    it { expect(user).to validate_presence_of(:email) }
    it { expect(user).to validate_presence_of(:password) }

    # Model Data Format
    it { expect(user).to_not allow_value(' ').for(:username) }
    it { expect(user).to_not allow_value(' ').for(:email) }
    it { expect(user).to_not allow_value('base@example').for(:email) }
    it { expect(user).to allow_value('dhh@nonopinionated.com').for(:email) }
    it { expect(user).to_not allow_value(' ').for(:password) }
    it { expect(user).to_not allow_value('aaaaaaa').for(:password) }

    # Associations

    # Database attributes
    it { expect(user).to have_db_column(:encrypted_password).of_type(:string) }
    it { expect(user).to have_db_column(:sign_in_count).of_type(:integer) }
    it { expect(user).to have_db_column(:remember_created_at).of_type(:datetime) }
    it { expect(user).to have_db_column(:last_sign_in_at).of_type(:datetime) }

    it { expect(user).to be_valid }
  end

end