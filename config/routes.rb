Rails.application.routes.draw do
  
  resources :operating_hours
  resources :images
  resources :entrance_fees
  resources :activities
  resources :parks
  resources :users, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
