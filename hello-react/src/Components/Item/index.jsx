import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  //给鼠标设置初始值
  state = { mouse: false };
  //鼠标移入,移除事件
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //勾选, 取消勾选某一个todo,完成todo里的done值变化
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  //删除一个todo的回调, 用的不是柯利化函数
  handleDelete = (id) => {
    //confirm 确定用户是否删除, 一般会有报错,需要加window才不会有错
    if (window.confirm("do you want to delete?")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        //在如下代码中设置鼠标监听事件用于做鼠标移入移除判断
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        //修改鼠标移入时背景颜色修改
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => {
            this.handleDelete(id);
          }}
          className="btn btn-danger"
          //查看鼠标是否存在,存在就设置block 没有就none
          style={{ display: mouse ? "block" : "none" }}
        >
          delete
        </button>
      </li>
    );
  }
}
