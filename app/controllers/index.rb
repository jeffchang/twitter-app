get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/:user_name' do

  @tweets = Twitter.user_timeline(params[:user_name]).map(&:text)
  erb :tweets
end
