Rails.application.routes.draw do
  namespace :api do
    resources :operating_hours, only: [:index, :show, ]
    resources :images, only: [:index, :show]
    resources :entrance_fees, only: [:index, :show, :update]
    resources :activities, only: [:index, :show, :create]
    resources :parks, only: [:index, :show]
    resources :users, only: [:index, :show, :create, :update]

    post "/login", to: "sessions#create"
    get "/me", to: "users#show"
    delete "/logout", to: "sessions#destroy"
  end



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
