activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end

activate :directory_indexes

set :css_dir,         "assets/stylesheets"
set :js_dir,          "assets/javascripts"
set :images_dir,      "assets/images"
set :fonts_dir,       "assets/fonts"
set :documents_dir,   "assets/documents"

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Optimize images
  activate :imageoptim

  # Enable cache buster
  activate :asset_hash
end
