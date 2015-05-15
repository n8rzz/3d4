Rails.application.routes.draw do
  get 'game/index'

  devise_for :users
  # , :controllers => { :registrations => "user/registrations" }

  root 'static_pages#index'

match '/game',          to: 'game#index',           via: 'get'
  match '/game/play',   to: 'game#gameStage',       via: 'get'
end
