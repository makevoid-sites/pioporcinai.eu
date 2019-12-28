task default: :docker_push

desc "Docker build and push to docker hub"
task :docker_push do
  sh "docker-compose build && docker-compose push"
end
