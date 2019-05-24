/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : hong

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-05-24 15:47:21
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of h_api_record
-- ----------------------------
INSERT INTO `h_api_record` VALUES ('1', '测试', 'beizhu', '2019-05-22 10:33:00', '2019-05-24 10:55:57', '{\n  code: 200,\n  msg: \"成功\",\n  data: {\n    list: []\n  }\n}');
INSERT INTO `h_api_record` VALUES ('3', '测试1', '备注2', '2019-05-23 17:49:55', '2019-05-24 15:26:32', '{\ncode: 200,\ndata: \'成功\'\n}');
INSERT INTO `h_api_record` VALUES ('5', '测试', '备注', '2019-05-23 20:13:52', '2019-05-24 14:21:45', '{\n  \"resultCode\": 200,\n  \"resultJson\": {\n    \"id|10000-20000\": 10000,\n    \"name\": \"@cname\",\n    \"star|0-5\": \"☆\",\n    \"image\": \"\",\n    \"locked|1-2\": false,\n    \"address|1\": [\"北京市\", \"贵州省\", \"浙江省\"],\n    \"phone\": /^(13|14|15|18)[0-9]\\d{8}$/,\n    \"order|10\": [{\n      \"id|+1\": 10000,\n      \"orderName\": \"@ctitle\",\n      \"orderTime\": \"@datetime\",\n    }],\n    \"loginTime\": function() {\n      return new Date().getTime();\n    }\n  },\n  \"resultMessage\": \"查询成功\"\n}');

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
