require "rails_helper"

describe "Game Pages" do

    subject { page }

    describe "Game Page" do
        before { visit game_path }

        it { expect(page).to have_selector('h3') }

    end
end