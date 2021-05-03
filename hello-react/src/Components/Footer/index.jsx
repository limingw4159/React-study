import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  //全选checkbox的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  //清除所有已完成的回调
  handleClearAll = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    //已经完成的个数,用reduce进行数据统计
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>finished {doneCount}</span> / All {total}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">
          clear finished task
        </button>
      </div>
    );
  }
}
