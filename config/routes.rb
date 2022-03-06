Rails.application.routes.draw do
  
  resources :operating_hours, only: [:index, :show, ]
  resources :images
  resources :entrance_fees, only: [:index, :show, :update]
  resources :activities, only: [:index, :show, :create]

  #parks only need to index and show
  resources :parks, only: [:index, :show]
  resources :users, only: [:index, :show]

  #each class has the specified url routes available

  #serializers should be specialized to provide parks with the associated information


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
