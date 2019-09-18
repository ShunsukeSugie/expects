Rails.application.routes.draw do
  devise_for :users, controllers: { 
    registrations: 'users/registrations'
  }
  devise_scope :user do
        get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root 'products#index'
  get 'search',to:'products#search'
  resources :products do
    get 'select_category' , to: 'products#select_category', on: :collection
    resources :reserves, only:[:new, :create,:edit,:update,:index,:destroy]
  end
  resources :reserves , only:[:new, :create,:edit,:update,:destroy] do
    resources :purchases,only:[:new,:create,:show,:destroy] do
      collection do
        post 'pay', to: 'purchases#pay'
      end 
    end
  end
  resources :purchase,only:[:new,:create,:show,:destroy] do
    resources :reviews,only:[:new,:create]
  end
  resources :chat_rooms, only: [:index,:new,:show ,:create] do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  resources :chat_members,only:[:new,:create]
  resources :categories,only:[:show]
  resources :addresses,only:[:show]
  resources :users, only: [:index, :edit, :new, :update]
  resources :user_profiles, only: [:new, :create, :edit,:update]
end
