Rails.application.routes.draw do
  devise_for :users
  # , :controllers => { :registrations => "user/registrations" }

  root 'static_pages#index'
end
