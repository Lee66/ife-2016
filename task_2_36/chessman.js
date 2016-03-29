define(["common"], function ($) {
	/**
	 * 棋子构造函数
	 * @param  {棋子元素,方向,位置}
	 * @return void 0
	 * @zp
	 */
	var ChessMan = function (options) {
		options = options || {};
		this.element = options.element || $("#chess");
		this.direction = options.direction || "top";
		this.position = options.position || {
			x: 10,
			y: 10
		};
		this.changeDirection = function (dir) {
			this.direction = dir;
			this.sureClassName.call(this);
		};
		this.init.call(this);
	};
	ChessMan.prototype.sureClassName = function () {
		this.element.className = this.direction;
	};
	ChessMan.prototype.init = function () {
		this.sureClassName.call(this);
	};
	return ChessMan;
});