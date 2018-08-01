/**
 * Dragger Component
 * Created By SH
 */

import React from "react";

import { findDOMNode } from 'react-dom';

import type from '../lib/type.js';

import { getRect } from '../lib/rect.js';

export default (WrapperdComponent) => {
  return class Dragger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        offsetX: null,
        offsetY: null,
        top: null,
        left: null,
      }
    }

    onDragStart = (e) => {
      if(e.button && e.button === 2) { // 鼠标右键点击
        return;
      }
      var rect = getRect(e.currentTarget);
      this.setState({
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
        top: rect.top,
        left: rect.left,
      });
      
      let dragEl = e.currentTarget.cloneNode(true);
      
      dragEl.style.position = 'absolute';
      dragEl.className += ' drag';
      dragEl.style.top = rect.top + 'px';
      dragEl.style.left = rect.left + 'px';
      dragEl.style.zIndex = 5555;

      this._copyDom = dragEl;
      
      document.body.appendChild(dragEl);
      document.body.style.userSelect = 'none';
      document.body.addEventListener('mousemove', this.onMove, false);
      document.body.addEventListener('mouseup', this.onDragEnd, false);

      this._emit(this.props.dragStart);
    }

    onMove = (e) => {
      var nowX = e.clientX;
      var nowY = e.clientY;
      // 判断是否开始拖动 精度：10px
      var left = nowX - this.state.offsetX;
      var top = nowY - this.state.offsetY;
      this._copyDom.style.top = top + 'px';
      this._copyDom.style.left = left + 'px';
      // 只为了触发react dom更新用
      this.setState({
        left,
        top,
      });
      
      this._emit(this.props.dragging, {left, top});
    }

    onDragEnd = (e) => {
      this._clear();
      
      this._emit(this.props.dragEnd);
    }

    _clear = () => {
      if(this._copyDom) {
        document.body.removeChild(this._copyDom);
      }
      this._copyDom = null;
      // reset user-select
      document.body.style.userSelect = '';
      document.body.removeEventListener('mousemove', this.onMove, false);
      document.body.removeEventListener('mouseup', this.onDragEnd, false);
    }
    
    _emit(emitFunc, ...args) {
      let props = this.handleProps();
      emitFunc && type(emitFunc) === 'function' && emitFunc(props, ...args);
    }

    /**
     * 阻止drag事件向内传递
     */
    handleProps = () => {
      var props = Object.assign({}, this.props);
      delete props.dragStart;
      delete props.dragging;
      delete props.dragEnd;
      return props;
    }

    render() {
      let props = this.handleProps();
      return <WrapperdComponent ref={(dom) => {this._dom = findDOMNode(dom);}} {...props} />
    }

    componentDidMount() {
      if(this._dom) {
        this._dom.addEventListener('mousedown', this.onDragStart);
      }
    }
    componentWillMount() {
      if(this._dom) {
        this._dom.removeEventListener('mousedown', this.onDragStart);
      }
    }
  };
};