#!/usr/bin/env zsh
# hugo mod clean
#ansible-playbook  ./deploy.yml -i ./inventory/hosts
rsync  -vr ./build/ root@59.110.27.59:/usr/share/tomcat/webapps/ROOT

