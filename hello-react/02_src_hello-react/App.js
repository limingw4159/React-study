//创建外壳组建App
import React, { Component } from "react";
import Hello from "./Components/Hello/Hello.js";
import Welcome from "./Components/Welcome/Welcome.js";
//用类式组件
//给Component赋值:
//创建并暴露App
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}

//把App组件暴露出去
// export default App;
