git pull origin master
cd /arclight.cc
npm run build
rm -rf /var/www/arclight.cc/html/build
mv build /var/www/arclight.cc/html
sudo systemctl restart httpd.service
