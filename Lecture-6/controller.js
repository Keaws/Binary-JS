var Controller = function (data) {
    this.model = data.model;
    this.elementId = data.elementId;
    this.render = data.render;
    this.clickHandlers = data.clickHandlers;
    this.updateExams = data.updateExams;
};

Controller.prototype.init = function () {
    var element = '#' + this.elementId;
    $(element).html(this.render());
};

Controller.prototype.click = function (element) {
    var fnName = this.clickHandlers['#' + element.id];

    this[fnName]();
};

/*Controller.prototype.checkChanged = function () {
    if (this.model.changed == true) {
        this.render();
        this.model.changed = false;
    }
    setTimeout(this.checkChanged, 100);
};*/
