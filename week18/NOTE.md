##### 发布系统
  服务器框架Express

  虚拟机安装
  在Linux中安装node
  开启ssh
  在VirtualBox设置--网络--端口转发 设置端口
  Linux中默认开启22接口

  Linux中
  开启ssh命令：service sshd start
  查看是否开启：systemctl list-unit-files | grep sshd

  Windows 链接虚拟机传输文件
  在需要传送的文件夹中操作命令：
    scp -P 8022 -r ./* root@127.0.0.1:/home/huangke/server