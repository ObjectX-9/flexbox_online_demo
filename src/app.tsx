import React from 'react';
import img from '../javascript.png';
import Header from '@components/Header';
import './app.scss';
function App() {
	return (
		<>
			{/* 头部 */}
			{/* 布局展示区域 */}
			{/* 配置区域 */}
			{/* 底部 */}
			<Header></Header>
			<div className='App'>React18 + Ts5 + webpack5 开发模板搭建</div>;
			<img src={img}></img>
		</>
	);
}

export default App;
