/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : hong

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-05-28 19:56:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for h_api_record
-- ----------------------------
DROP TABLE IF EXISTS `h_api_record`;
CREATE TABLE `h_api_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'api名称',
  `remark` text COLLATE utf8mb4_unicode_ci COMMENT '内容',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `code_rule` text COLLATE utf8mb4_unicode_ci COMMENT '代码规则',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of h_api_record
-- ----------------------------
INSERT INTO `h_api_record` VALUES ('1', '测试', 'beizhu', '2019-05-22 10:33:00', '2019-05-24 10:55:57', '{\n  code: 200,\n  msg: \"成功\",\n  data: {\n    list: []\n  }\n}');
INSERT INTO `h_api_record` VALUES ('3', '测试1', '备注2', '2019-05-23 17:49:55', '2019-05-24 15:26:32', '{\ncode: 200,\ndata: \'成功\'\n}');
INSERT INTO `h_api_record` VALUES ('5', '测试', '备注2', '2019-05-23 20:13:52', '2019-05-24 16:33:48', '{\n  \"resultCode\": 200,\n  \"resultJson\": {\n    \"id|10000-20000\": 10000,\n    \"name\": \"@cname\",\n    \"star|0-5\": \"☆\",\n    \"image\": \"\",\n    \"locked|1-2\": false,\n    \"address|1\": [\"北京市\", \"贵州省\", \"浙江省\"],\n    \"phone\": /^(13|14|15|18)[0-9]\\d{8}$/,\n    \"order|10\": [{\n      \"id|+1\": 10000,\n      \"orderName\": \"@ctitle\",\n      \"orderTime\": \"@datetime\",\n    }],\n    \"loginTime\": function() {\n      return new Date().getTime();\n    }\n  },\n  \"resultMessage\": \"查询成功\"\n}');
INSERT INTO `h_api_record` VALUES ('6', 'api模拟1', '', '2019-05-25 11:08:57', '2019-05-25 11:08:57', '{\n code:200,\nmsg:\'成功\',\nlist:[]\n} ');
INSERT INTO `h_api_record` VALUES ('7', 'api模拟2', '', '2019-05-25 11:10:31', '2019-05-25 11:10:31', '{\ncode:200,\nmsg:\'成功\',\nlist:[]\n}');
INSERT INTO `h_api_record` VALUES ('8', 'api模拟3', '', '2019-05-25 11:10:47', '2019-05-25 11:10:47', '{\ncode:200,\nmsg:\'成功\',\nlist:[]\n}');
INSERT INTO `h_api_record` VALUES ('9', 'api模拟4', '', '2019-05-25 11:11:04', '2019-05-27 10:45:31', '{\n  code: 200,\n  msg: \'成功\',\n  list: []\n}');
INSERT INTO `h_api_record` VALUES ('10', 'api模拟5', '', '2019-05-25 11:11:18', '2019-05-25 11:11:18', '{\ncode:200,\nmsg:\'成功\',\nlist:[]\n}');
INSERT INTO `h_api_record` VALUES ('11', 'api模拟6', '', '2019-05-25 11:11:49', '2019-05-27 10:45:21', '{\n  code: 200,\n  msg: \'成功\',\n  list: []\n}');
INSERT INTO `h_api_record` VALUES ('12', 'api模拟7', '', '2019-05-25 11:12:00', '2019-05-27 10:45:12', '{\n  code: 200,\n  msg: \'成功\',\n  list: []\n}');
INSERT INTO `h_api_record` VALUES ('13', 'api模拟8', '备注230', '2019-05-25 11:12:12', '2019-05-25 14:11:06', '{\n  code: 220,\n  msg: \'成功\',\n  list: []\n}');

-- ----------------------------
-- Table structure for h_article
-- ----------------------------
DROP TABLE IF EXISTS `h_article`;
CREATE TABLE `h_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of h_article
-- ----------------------------
INSERT INTO `h_article` VALUES ('1', '标题', '内容1', '2019-05-17 15:52:17', null);
INSERT INTO `h_article` VALUES ('2', '标题2', '内容2', '2019-05-17 15:52:21', null);
INSERT INTO `h_article` VALUES ('3', '标题3', '内容3', '2019-05-17 15:52:24', null);

-- ----------------------------
-- Table structure for h_user
-- ----------------------------
DROP TABLE IF EXISTS `h_user`;
CREATE TABLE `h_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of h_user
-- ----------------------------
INSERT INTO `h_user` VALUES ('1', 'admin', 'e10adc3949ba59abbe56e057f20f883e', null, '2019-05-28 15:25:15', '2019-05-28 15:25:20');
