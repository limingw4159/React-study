import React, { Component } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";
export default class App extends Component {
  //初始化状态
  state = {
    todos: [
      {
        id: "001",
        name: "eating",
        done: true,
      },
      {
        id: "002",
        name: "sleeping",
        done: true,
      },
      {
        id: "003",
        name: "coding",
        done: false,
      },
      {
        id: "004",
        name: "streeting",
        done: false,
      },
    ],
  };
  //addTodo用于添加一个todo, 接收的参数时todo对象
  addTodo = (todoObj) => {
    //获取原todos
    const { todos } = this.state;
    //追加一个todo
    const newTodos = [todoObj, ...todos];
    //更新状态,把newTodos 放进todos
    this.setState({ todos: newTodos });
  };
  //用于勾选todoList的状态,并且更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state;
    //把里面的指定项获取到
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  // 删除事件:
  deleteTodo = (id) => {
    console.log(id);
    //获取原来的todos
    const { todos } = this.state;
    // 删除制定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    //更新状态
    this.setState({ todos: newTodos });
  };
  //checkAllTodo用于底部footer全选
  checkAllTodo = (done) => {
    //获取原来的todos
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };
  //清除所有已完成的
  clearAllDone = () => {
    //获取原来的todos
    const { todos } = this.state;
    //过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    console.log(this);
    return (
      <div className="todo-container">
        <Header addTodo={this.addTodo} />
        {
          //将updateTodo给List
        }
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          todos={todos}
          checkAllTodo={this.checkAllTodo}
          clearAllDone={this.clearAllDone}
        />
      </div>
    );
  }
}
