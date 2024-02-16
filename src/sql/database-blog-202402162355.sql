-- MySQL dump 10.13  Distrib 5.7.41, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.41-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `interviews`
--

DROP TABLE IF EXISTS `interviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interviews` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `content` text,
  `like` int(11) DEFAULT '0',
  `visits` int(11) DEFAULT '0',
  `fromLink` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='面经表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES ('0f2153fa-a999-4f0e-9497-23f06adc14c1','前端面试高频题，八股文精华篇-1.浏览器和协议','前端_刘师兄','从输入url到展示页面加载的过程\n通过DNS解析获得网址的对应IP地址浏览器与远程web服务器,通过TCP三次握手协商来建立一个 TCP / IP 连接浏览器 通过TCP / IP连接 向web服务器 发送一个 HTTP 请求服务器的永久重定向响应\n浏览器跟踪重定向地址\n服务器处理请求\n服务器返回一个 HTTP 响应\n浏览器渲染: 解析HTML、解析CSS、解析JS、Render树',0,0,'https://juejin.cn/post/7023285223508934663','2024-02-16 15:07:00','2024-02-16 15:39:24'),('56ea756d-065e-456f-9867-fabd58076957','前端面试高频题，八股文精华篇-2. 三次握手和四次挥手','前端_刘师兄','第一次握手，发送端首先发送一个带SYN（synchronize）标志的数据包给接收方，第一次的seq序列号是随机产生的，这样是为了网络安全，如果不是随机产生初始序列号，黑客将会以很容易的方式获取到你与其他主机之间的初始化序列号，并且伪造序列号进行攻击\n第二次握手，接收端收到后，回传一个带有SYN/ACK（acknowledgement）标志的数据包以示传达确认信息SYN 是为了告诉发送端，发送方到接收方的通道没问题；ACK 用来验证接收方到发送方的通道没问题\n第三次握手，发送端再回传一个带ACK标志的数据包，代表握手结束，若在握手某个过程中某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包',0,0,'https://juejin.cn/post/7023285223508934663','2024-02-16 15:10:01','2024-02-16 15:10:01'),('6c22031c-4d9a-421b-82e7-f4a989f2d905','var、let、const之间的区别','阮一峰','一、var\n在ES5中，顶层对象的属性和全局变量是等价的，用var声明的变量既是全局变量，也是顶层变量\n注意：顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象\n二、let\nlet是ES6新增的命令，用来声明变量\n用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效\n三、const\nconst声明一个只读的常量，一旦声明，常量的值就不能改变\n四、区别\nvar、let、const三者区别：\n变量提升\nvar声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined\nlet和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错\n暂时性死区\nvar不存在暂时性死区\nlet和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量\n块级作用域\nlet和const存在块级作用域\n重复声明\nvar允许重复声明变量\nlet和const在同一作用域不允许重复声明变量\n修改声明的变量\nvar和let可以\nconst声明一个只读的常量。一旦声明，常量的值就不能改变\n使用\n能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var',0,0,'https://es6.ruanyifeng.com/','2024-02-16 15:29:45','2024-02-16 15:29:45'),('c344217c-0cd8-4867-b387-50f0ffff6fa2','前端面试高频题，八股文精华篇-4. 跨域的解决方案','前端_刘师兄','JSONP\nPostMessage\ndocument.domain\nWebsocket\nCORS\nNginx 反向代理\nNode 中间件代理',0,0,'https://juejin.cn/post/7023285223508934663','2024-02-16 15:15:01','2024-02-16 15:15:01'),('c7182771-3aef-43a0-b3b9-fac5f1b6aff7','数组的常用方法有哪些？','JS每日一题','操作方法\n数组基本操作可以归纳为 增、删、改、查，需要留意的是哪些方法会对原数组产生影响，哪些方法不会下面对数组常用的操作方法做一个归纳排序方法\n增\n下面前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响\npush()\nunshift()\nsplice()\nconcat()\n删\n下面三种都会影响原数组，最后一项不影响原数组：\npop()\nshift()\nsplice()\nslice()\n改\n即修改原来数组的内容，常用splice\n查\n即查找元素，返回元素坐标或者元素值\nindexOf()\nincludes()\nfind()\n转换方法\nreverse()\nsort()\n迭代方法\n常用来迭代数组的方法（都不改变原数组）有如下：\nsome()\nevery()\nforEach()\nfilter()\nmap()\n',0,0,'https://vue3js.cn/interview/JavaScript/array_api.html','2024-02-16 15:23:37','2024-02-16 15:23:37'),('d3dc5971-64de-42cb-a2ac-6fe799acc436','前端面试高频题，八股文精华篇-3. HTTP和HTTPS','前端_刘师兄','HTTP：\n不安全\n协议对客户端没有状态存储【没有状态】\n每次请求需要TCP三次握手四次挥手，和服务器重新建立连接【没有连接】\n基本的特性，由客户端发起请求，服务端响应\n简单快速、灵活\n使用明文、请求和响应不进行确认\nHTTPS：\n安全HTTP安全版本，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护\n采用混合加密技术，传输过程无法直接查看明文内容【传输加密】\n通过证书认证客户端访问的是自己的服务器【身份认证】\n传输过程防止被篡改【数据完整】',0,0,'https://juejin.cn/post/7023285223508934663','2024-02-16 15:13:21','2024-02-16 15:13:21');
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 23:55:41
