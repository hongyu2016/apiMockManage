/**
 * 基类
 * 
 */
const configFile = require('../../../config/common');
const config = configFile[process.env.NODE_ENV];
class Base{
   static async getPath(ctx){
        return config
   }
}

export default Base;
