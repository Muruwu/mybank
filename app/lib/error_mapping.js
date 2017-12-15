'use strict';

module.exports = {
  HttpBadRequest: {
    UserInfoInvalid: '400001: 用户信息无效',
    ParameterInvalid: '400002: 参数无效',
    UserAlreadyExist: '400003: 用户已存在',
    UserNotExist: '400004: 用户不存在',
    RoleAlreadyExist: '400005: 角色已存在',
    RoleNotExist: '400006: 角色不存在',
    PermissionAlreadyExist: '400007: 权限已存在',
    PermissionNotExist: '400008: 权限不存在',
    UserRoleAlreadyExist: '400027: 用户角色已存在',
    UserRoleNotExist: '400028: 用户角色不存在',
    RolePermissionAlreadyExist: '400029: 角色权限已存在',
    RolePermissionNotExist: '400030: 角色权限不存在',
    ProductImageNotExist: '400031: 商品图片不存在',
    RechargeImageNotExist: '400032: 充值记录图片不存在',
  },

  HttpUnauthorized: {
    UserTokenInvalid: '401001: 用户登录已失效',
  },

  HttpForbidden: {
    RequestInvalid: '403001: 请求无效',
    RequestRefused: '403002: 请求受限',
  },

  HttpNotFound: {
    ServiceNotFound: '404001: 服务未找到',
  },

  HttpConflict: {
  },

  HttpInternalServerError: {
    UserCreateFailed: '500001: 用户创建失败',
    UserDeleteFailed: '500002: 用户删除失败',
    UserUpdateFailed: '500003: 用户更新失败',
    UserRoleAddFailed: '500004: 用户角色添加失败',
    UserRoleDelFailed: '500005: 用户角色删除失败',
    RoleCreateFailed: '500006: 角色创建失败',
    RoleDeleteFailed: '500007: 角色删除失败',
    RoleUpdateFailed: '500008: 角色更新失败',
    RolePermissionAddFailed: '500009: 角色权限添加失败',
    RolePermissionDelFailed: '500010: 角色权限删除失败',
    PermissionCreateFailed: '500011: 权限创建失败',
    PermissionDeleteFailed: '500012: 权限删除失败',
    PermissionUpdateFailed: '500013: 权限更新失败',
  },

  HttpNotImplemented: {
    ServiceNotImplemented: '501001: 服务未实现',
  },

  HttpBadGateway: {

  },

  HttpServiceUnavailable: {

  },

  HttpGatewayTimeout: {

  },
};
