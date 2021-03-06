# Project

### start project :
 - Need to install `yarn` if you want to run with `yarn` 
 - `yarn install` | `npm install` 
 - `yarn start` | `npm start` 

  - To run nodemon `npm install -g nodemon` after that run `yarn n-start`  
### run test:
 
    - `yarn coverage`

### Eslint

#### Check error

        - `yarn eslint-check`

#### Fix error

        - `yarn eslint-fix`

# Code convention (ESLINT) 

## With Visual studio code

- Step 1:
  - `npm install eslint -g --save-dev`
- Step 2:
  - add eslint to VS code
- Step 3:
  - `yarn global add prettier`

### #Reference Doc :
- [Eslint Rule](https://eslint.org/docs/rules/)
- [Eslint Config](https://eslint.org/docs/user-guide/configuring)
- [Config eslint for Visual Studio](https://medium.com/@pgivens/write-cleaner-code-using-prettier-and-eslint-in-vscode-d04f63805dcd)

# DOCKER

### DOCKER BUILD IMAGE

- docker build -t '${image_name}' .

### START IMAGE DOCKER
1. CMD 
- `docker run --name='${name_container}' ${docker_image_name} -d -p ${communicate_port}: ${port_docker} --env 'key' = 'value'`
    - `-d`:
    - `-p` port communicate : port docker
    -       Ex -p 3001:3002
    - `--env`: 'key' = 'value'
    -     NODE_ENV='development'
2. EXAMPLE:

  - `docker run --name='skeleton' -p 3001:3002 --env NODE_ENV='production' docker-skeleton`

# GITHUB
  - generate key ssh : `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
  - Copy rsa to clipsboard (install xclip)) : `xclip -sel clip < ~/.ssh/id_rsa.pub`