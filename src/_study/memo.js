/*
 * @Author: simuty 
 * @Date: 2020-04-14 10:50:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-04-14 10:51:35
 */
// !--------React.memo 补充

/**
 * 
 * React核心开发团队一直都努力地让React变得更快。在React中可以用来优化组件性能的方法大概有以下几种:
 *  1. 组件懒加载(React.lazy(...)和<Suspense />)
 *  2. Pure Component: PureComponent + shouldComponentUpdate
 *  3. shouldComponentUpdate(...){...}生命周期函数
 *  4. React.memo()
 * 
 * 链接
 *  1. https://juejin.im/post/5c8edf626fb9a0710d65c7fc
 */


 /** 
  * 1. 类组件包含 shouldComponentUpdate(...){...}生命周期函数， 
  *     采用PureComponent + shouldComponentUpdate, 很容易实现是否需要渲染的判断；
  * 2. 函数组件没有state、没有shouldComponentUpdate，故无法采用上边的方法
  * 3. React v16.6 引入 React.memo()
  * 
  * !React.PureComponent & 对比
  * 
  * React.PureComponent是银
  * React.memo(...)是金
  * React.PureComponent是给ES6的类组件使用的
  * React.memo(...)是给函数组件使用的
  * React.PureComponent减少ES6的类组件的无用渲染
  * React.memo(...)减少函数组件的无用渲染
  * 
 */


// !需求》：现在有一个显示时间的组件,每一秒都会重新渲染一次
// ?对于Child组件我们肯定不希望也跟着渲染，所有需要用到PureComponent || React.momo()

// Parent
import React  from 'react';

export default class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }

    render(){
        return (
            <div>
                <Child seconds={1}/>
                <div>{this.state.date.toString()}</div>
            </div>
        )
    }
}

// rfce 快捷键
// Child
function Child({seconds}){
    console.log('I am rendering');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};
export default React.memo(Child)

/**
 *
 *
 * @param {*} prevProps 组件将会接收的下一个参数props
 * @param {*} nextProps 组件的下一个状态state 
 * @returns
 */
function areEqual(prevProps, nextProps) {
    if (prevProps.seconds === nextProps.seconds) {
        return true;
    } else {
        return false;
    }
}

// 第一个参数为纯函数的组件，第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。
export default React.memo(Child, areEqual);

/* -------- React.memo ----------- */
