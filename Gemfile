# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'https://rubygems.org'

# General
gem 'middleman', '~>3.1.6'
gem 'middleman-deploy'
gem 'middleman-livereload', '~> 3.1.0'

# Assets
gem 'bourbon'
gem 'neat'
gem 'bitters'
gem 'hamlbars'
gem 'handlebars_assets'
gem 'middleman-react', '~> 0.11.1'


# Platform-specific
platforms :mswin, :mingw do
  gem 'wdm', '~> 0.1.0' # For faster file watcher updates on Windows
end

platforms :mri_18 do
  gem 'ruby18_source_location' # Cross-templating language block fix for Ruby 1.8
end
