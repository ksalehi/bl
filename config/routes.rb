Rails.application.routes.draw do
    get 'static_pages/show'
    root 'home#index'
    get 'home/index'
    get ':namespace/:page' => 'static_pages#show_nested'
    get ':page' => 'static_pages#show'
    get "*" => "application#routing_error" #TODO: this doesn't work yet
end
