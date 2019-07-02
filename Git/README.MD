## Git

[廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

#### Git 快照

git可以看作是小型文件系统的一组快照，每次commit时,就会制作一个快照并保存这个快照  的索引,如果文件没有修改,git就不会创建文件,而是保留一个链接指向之前的索引,git对待数据就像是一个快照流。

#### Git工作流程

- 在工作区修改文件或创建文件
- 将修改的文件保存到暂存区
- 将暂存区的文件提交到git仓库历史目录

#### Git基本命令

`git init` 初始化一个本地仓库

`git add <file>` 可多次使用,将文件提交到暂存区

`git commit -m <message>` 把暂存区的文件提交到历史仓库

`git commit  -a -m <message>` 如果之前提交过暂存区,文件就会被跟踪与纪录,不用再次 git add ~

`git log` 查看提交历史,以便确定回到那个版本

`git reset--hard commid_id` 回到某个历史版本

`git status` 随时掌握工作区的状态

`git cheakout -- readme.txt`  撤销修改

#### 远程仓库

`ssh-keygen -t -rsa -C"youremail@example.com"`   生成密钥在线上仓库进行验证,可重复使用,如果github将SSH Key删掉,则不能从本地向远程提交文件

`git remote add origin git@github.com:michaelliao/yourname.git`关联远程仓库,只有和远程仓库没有冲突才可以上传.

`git push -u origin master` 向远程推送 

`git clone git@github.com:michaelliao/yourname.git`克隆本地库

`git push -u origin master -f` 强制把远程仓库覆盖为本地代码

`git pull` 强制把远程仓库覆盖本地仓库

`git remote show remote-name` 查看远程仓库

`git remote rename ` 远程仓库重命名

git本地仓库远程上传时,会对比远程仓库代码是否与本地存储库上次提交的一样

