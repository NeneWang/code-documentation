PAGE=wangnelson.xyz/documentation/dist
FTP_HOST=wangnelson.xyz
FTP_USER=guide@guide.wangnelson.xyz
FTP_PASSWORD=oq9b*K68FCxB!4aF
# Requrements: git-ftp, npm, node

ftp_user=ftp_public@wangnelson.xyz
ftp_pass=ZA.m6e{,U6XG


main: build-commit ft-push


start:
	npm run dev

save:
	git add --all
	git commit -m "Some Random Progress :tada:"
	git push origin HEAD


deploy-heroku:
	npm run docs:build
	git add --all
	git commit -m "Build Deployment | {$v}"
	git push origin HEAD
	git push heroku head:master


build-commit:
	npm run docs:build
	git add --all
	git commit -m "Production update | ${v}"	
	git push origin HEAD

build-commit-donpush:
	npm install
	npm run docs:build
	git add --all
	git commit -m "Production update | ${v}"


merge-to-deployment:
	git checkout deployment
	git pull
	git merge master
	git push origin HEAD
	git checkout master


ft-push:
	git ftp push 
	echo "open in https://docs.wangnelson.xyz/" && git log -n 2
	
ft-configpush:
	git config git-ftp.url ftp://${FTP_HOST}
	git config git-ftp.user ${FTP_USER}	
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot docs/.vuepress/dist/
	git ftp push --force

ftpinit:
	git config git-ftp.url ftp://${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot docs/.vuepress/dist/
	git ftp init --force

first-deploy:
	make ftpinit
	git ftp push

cap:
	git add --all
	git commit -m "${m}"
	git push origin HEAD
	git log -n 2

