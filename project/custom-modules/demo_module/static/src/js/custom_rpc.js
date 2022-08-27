odoo.define('user_recent_log.CustomBasicModel', function (require) {

var BasicModel = require('web.BasicModel');
var Changes = false;

var CustomBasicModel = BasicModel.include({

    _fetchRecord: function (record, options) {
        var _super = this._super.bind(this);
        var changes = window.Changes;
        window.Changes = false;
        main_url = window.location.href.split("&")
        var x;
        var model = record.model
        for( x in main_url){
            rec = main_url[x].split("=")
            if (rec[0]=="model"){
                model = rec[1]
            }
        }
        this._rpc({
                    model: 'user.recent.log',
                    method: 'get_recent_log',
                    args: [model, record.res_id, changes],
                });
        return _super(record, options);
    },

    _generateChanges: function (record, options) {
        var _super = this._super.bind(this);
        var res = _super(record, options);
        window.Changes = res
        return res
    },
})

return CustomBasicModel;

});
