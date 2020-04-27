//simple Login
import React from 'react';
import { Button, Form, Input } from 'antd';

import { LayoutContent } from './styled';
import ILoginForm from './interface';
import config from '../../config';

const FormItem = Form.Item;
const prefix = config.prefix;

const Login = (props: any) => {
	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = (values: ILoginForm) => {
		console.log(values);
		props.history.push(`${prefix}`);
	};

	return (
		<LayoutContent>
			<Form onFinish={onFinish}>
				<FormItem label='username' name='username'>
					<Input />
				</FormItem>
				<FormItem label='password' name='password'>
					<Input />
				</FormItem>
				<FormItem {...tailLayout}>
					<Button type='primary' htmlType='submit'>
						submit
					</Button>
				</FormItem>
			</Form>
		</LayoutContent>
	);
};

export default Login;
