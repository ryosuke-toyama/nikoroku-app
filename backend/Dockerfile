FROM ruby:3.3.6-alpine

RUN apk add --no-cache \
    build-base \
    postgresql-dev \
    postgresql-client \
    postgresql-libs \
    nodejs \
    npm \
    tzdata
WORKDIR /app
COPY backend/Gemfile backend/Gemfile.lock /app/
RUN bundle install
COPY backend/ /app/
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]