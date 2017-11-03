Rails.application.routes.draw do

  root 'static_pages#index'
  get  'auth/:provider/callback', to:'sessions#create'
  get  'logout',                  to:'sessions#destroy'

  resources :friends do
    resources :interactions
  end

  namespace :api do
    namespace :v1 do
        resources :friends, except:[:new] do
          resources :interactions, only: [:create, :edit, :update, :destroy]
        end
        scope :user do
          get 'is_signed_in', to: 'user#is_signed_in?'
        end
      end
    end
  end
