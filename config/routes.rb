Rails.application.routes.draw do
  devise_for :users, controllers: { 
    registrations: 'users/registrations'
  }
  # devise_scope :user do
  #       get '/users/sign_out' => 'devise/sessions#destroy'
  # end
  root 'products#index'
  resources :products do
    get 'select_category' , to: 'products#select_category', on: :collection
  end
  resources :users, only: [:index, :edit, :new, :update]
  resources :user_profiles, only: [:new, :create, :edit,:update]
end