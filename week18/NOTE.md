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

	访问虚拟服务的端口会用防火墙需要开启3000端口：
	CentOS 开启防火墙及指定端口
1. CentOS7
查看防火墙状态
[root@bogon ~]# firewall-cmd --state

开启防火墙
[root@bogon ~]# systemctl start firewalld.service

重启防火墙
[root@bogon ~]# systemctl restart firewalld.service

关闭防火墙
[root@bogon ~]# systemctl stop firewalld.service

开启指定端口
[root@bogon ~]# firewall-cmd --zone=public --add-port=80/tcp --permanent

--zone # 作用域
--add # 添加端口，格式为：端口/通讯协议
--permanent # 永久生效，没有此参数重启后失效

重新加载后生效
[root@bogon ~]# firewall-cmd --reload

查看已开启端口
[root@bogon ~]# firewall-cmd --list-ports


node 工具：
  压缩：archiver
  解压：unzipper