require "rails_helper"

describe "Static Pages" do

    subject { page }

    describe "Home Page" do
        before { visit root_path }

        it { expect(page).to have_selector('h1 a', text: 'Three D Four') }
        # it { expect(page).to have_css('title') }

        # register link
        # login link

        # login link -> sessions/new
        # register link -> users/new

    end
end