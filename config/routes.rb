Rails.application.routes.draw do
  
  resources :operating_hours, only: [:index, :show, ]
  resources :images, only: [:index, :show]
  resources :entrance_fees, only: [:index, :show, :update]
  resources :activities, only: [:index, :show, :create]

  #parks only need to index and show
  resources :parks, only: [:index, :show]
  resources :users, only: [:index, :show, :create]

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
