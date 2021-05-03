import React, { Component } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
export default class index extends Component {
  //对接收的props进行:类型,必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  //键盘事件的回调函数
  handleKeyup = (event) => {
    //解构,赋值获取keyCode, target
    const { keyCode, target } = event;
    //判断是否是回车案件
    if (keyCode !== 13) return;
    //添加的名字不能为空
    if (target.value.trim() === "") {
      alert("input cannot empty");
      return;
    }
    //准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    //将todoObj传给App
    this.props.addTodo(todoObj);
    //清空输入
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyDown={this.handleKeyup}
          type="text"
          placeholder="please enter your task name and press enter"
        />
      </div>
    );
  }
}
