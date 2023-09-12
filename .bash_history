sudo apt update && sudo apt upgrade
sudo apt update &7 sudo apt upgrade
sudo apt update && sudo apt upgrade
sudo apt install -y software-properties-common
sudo add-apt-repository --yes --updateppa:ansible/ansible
sudo apt install -y software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install -y ansible
ansible-galaxy collection install community.postgresql community.general
ansible-pull -K -U https://github.com/fullstackacademy/developer-playbook.git playbook.yml
