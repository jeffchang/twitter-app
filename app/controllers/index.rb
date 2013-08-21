get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do
  Twitter.update(params[:tweet])
  @tweets = Twitter.user_timeline("jsellout").map(&:text)
  erb :tweets
end
