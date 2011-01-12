# Settings
# ========
source 'http://rubygems.org'

# Rails
# =====
gem 'rails', '~> 3.0.0'

# Database
platforms :ruby do
  gem 'sqlite3-ruby', :require => 'sqlite3'
  gem 'mysql'
end

platforms :jruby do
  gem 'jdbc-sqlite3'
  gem 'activerecord-jdbc-adapter'
  gem 'activerecord-jdbcsqlite3-adapter'
  gem 'ffi-ncurses'
  gem 'jruby-openssl'
  gem 'jruby-rack'
  gem 'warbler'
end

# Development
# ===========
group :development do
  gem 'rails3-generators'
  gem 'rspec-rails', '~> 2.1'
  # Haml generators
  gem 'hpricot'
  gem 'ruby_parser'
  gem 'rcov'
  gem 'capistrano'
  gem 'capistrano-ext'
end

# Test
# ====
group :test do
  gem 'rspec-rails', '~> 2.1'
  gem 'mocha'
  gem 'shoulda'
  gem 'factory_girl_rails'
  gem 'cucumber-rails'
  gem 'cucumber'
  gem 'webrat'
end

# Standard helpers
# ================

gem 'haml'
gem 'compass', '~> 0.10.6'
gem 'fancy-buttons'

gem 'simple-navigation'

gem 'formtastic', '~> 1.1.0'
gem 'will_paginate'
gem 'inherited_resources'
gem 'has_scope'
gem 'i18n_rails_helpers', '~> 0.8.0'
gem 'show_for'

gem 'jquery-rails'
# Raiffeisen BookingImport
gem 'remotipart'
gem 'paperclip'
gem 'csv-mapper'

# Bookyt
# ======
# Authentication
gem 'devise', '~> 1.1'
# Authorization
gem 'cancan'

# Date/Time handling
gem 'validates_timeliness', '~> 3.0.0'

# PDF generation
gem 'pdfkit'
gem 'wkhtmltopdf-binary'

# Vcards
gem 'has_vcards', '~> 0.6'
