import styles from './index.module.scss'

import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

// const message = 'Hello World';

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const LoginContent = () => {
  return (
    <div className={styles.LoginContent}>
      <div className={styles.FormTop}>
        <h1>欢迎登录</h1>
      </div>

      <div className={styles.FormContent}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelAlign="left"
          
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[
              { required: true, message: '请输入账号' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: '请输入密码' }
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* 方法1：修改wrapperCol的占比 */}
          {/* <Form.Item name="remember" valuePropName="checked" label={null} 
            wrapperCol={{ span: 12 }}
          > */}
          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <div className={styles.ConfirmBtn}>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                登录
              </Button>
            </Form.Item>
          </div>
        </Form>
          
      </div>
      
      <div className={styles.FormBtm}>
        <div className={styles[`btm-txt`]}>
          这是一段声明内容
        </div>
      </div>
    </div>
  )
}
export default LoginContent;