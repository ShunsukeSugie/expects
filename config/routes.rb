Rails.application.routes.draw do
  devise_for :users, controllers: { 
    registrations: 'users/registrations'
  }
  devise_scope :user do
        get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root 'products#index'
  resources :products do
    get 'select_category' , to: 'products#select_category', on: :collection
    resources :reserves, only:[:new, :create,:edit,:update,:index]
  end
  resources :reserves , only:[:new, :create,:edit,:update] do
    resources :purchases,only:[:new,:create,:show,:destroy] do
      collection do
        post 'pay', to: 'purchases#pay'
      end 
    end
  end
  resources :users, only: [:index, :edit, :new, :update]
  resources :user_profiles, only: [:new, :create, :edit,:update]
end