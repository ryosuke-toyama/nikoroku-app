FROM ruby:3.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install
COPY . .
CMD ["rails", "server", "-b", "0.0.0.0"]
