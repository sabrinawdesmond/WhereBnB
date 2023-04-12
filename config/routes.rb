Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post 'api/test', to: 'application#test'
  # Defines the root path route ("/")
  # root "articles#index"


  namespace :api, defaults: { format: :json } do
    resources :users, only: :create do  
      resources :reviews, only: [:index]
    end
    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :show, :destroy, :update]
  end

  get '*path', to: "static_pages#frontend_index"

end
