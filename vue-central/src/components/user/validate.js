import {db} from '@/db/dao'
import {utils} from '@/utils/utils'
import {httpStatus} from '@/constant/constant'

/*
* 验证用户名唯一性
*/
const validateUserName = (rule,value,callback) => {
  if (value) {
    let _url = utils.authorize('/user/query_by_username.json',value);
    db.get(_url).then(res => {
      // console.log('dao:response code:',res.code);
      if (httpStatus.STATUS_OK === res.code) {
        return callback(new Error('该用户名已存在'));
      } else {
        callback();
      }
    });
  }
};
/*
* 验证用户邮箱唯一性
*/
const validateEmail = (rule,value,callback) => {
  if (value) {
    let _url = utils.authorize('/user/email.json',value);
    db.get(_url).then(res => {
      if (httpStatus.STATUS_OK === res.code) {
        return callback(new Error('该用邮箱已注册'));
      } else {
        callback();
      }
    });
  }
};
/*
* 验证用户手机号唯一性
*/
const validatePhone = (rule,value,callback) => {
  if (value) {
    let _url = utils.authorize('/user/phone.json',value);
    db.get(_url).then(res => {
      if (httpStatus.STATUS_OK === res.code) {
        return callback(new Error('该用手机号已注册'));
      } else {
        callback();
      }
    });
  }
};

export const userValidate = {
   userValidateRules: {
    userName: [
      { required: true, message: '请输入用户名',trigger: 'blur' },
      { validator: validateUserName, trigger: 'blur'}
    ],
    nickName: [
      { required: true, message: '请输入用户昵称',trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码长度至少为六位',trigger: 'change,blur'}
    ],
    sex: [
      { required: true, message: '请选择性别', trigger: 'blur,change' }
    ],
    locked: [
      { required: true, message: '请选择用户状态', trigger: 'blur,change' }
    ],
    phone: [
      { required: true, message: '请填写手机号', trigger: 'blur'},
      { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机格式', trigger: 'change,blur' },
      { validator: validatePhone, trigger: 'blur'}
    ],
    email: [
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' },
      { validator: validateEmail, trigger: 'blur'}
    ],
    birthday: [
      { required: true, message: '请选择出生日期', trigger: 'blur' }
    ]
  }
}
