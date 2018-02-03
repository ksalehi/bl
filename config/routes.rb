Rails.application.routes.draw do
  get 'static_pages/show'

  root 'home#index'
  scope 'api' do
      resources :blahs
  end
  get 'home/index'
  get ':page' => 'static_pages#show'
end
