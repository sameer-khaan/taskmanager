var UITree = function () {

    return {
        //main function to initiate the module
        init: function () {

            var DataSourceTree = function (options) {
                this._data  = options.data;
                this._delay = options.delay;
            };

            DataSourceTree.prototype = {

                data: function (options, callback) {
                    var self = this;

                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);

                        callback({ data: data });

                    }, this._delay)
                }
            };
            
            // INITIALIZING TREE
            var treeDataSource = new DataSourceTree({
                data: [
                    { name: 'Sales', type: 'folder', additionalParameters: { id: 'F1' } },
                    { name: 'Projects', type: 'folder', additionalParameters: { id: 'F2' } },
                    { name: 'Reports', type: 'item', additionalParameters: { id: 'I1' } },
                    { name: 'Finance', type: 'item', additionalParameters: { id: 'I2' } }
                ],
                delay: 400
            });

            var treeDataSource2 = new DataSourceTree({
                data: [
                    { name: 'System Logs <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Notifications <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="icon-bell"></i> Alerts', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="icon-bar-chart"></i> Tasks', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource3 = new DataSourceTree({
                data: [
                    { name: 'Resources <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Projects <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: 'Nike Promo 2013', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: 'IPO Reports', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource4 = new DataSourceTree({
                data: [
                    { name: 'Projects<div class="tree-actions"><i class="icon-plus"></i><i class="icon-remove"></i><i class="icon-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Reports<div class="tree-actions"><i class="icon-plus"></i><i class="icon-remove"></i><i class="icon-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="icon-user"></i> Member <div class="tree-actions"><i class="icon-plus"></i><i class="icon-remove"></i><i class="icon-refresh"></i></div><div class="tree-actions"><i class="icon-plus"></i><i class="icon-remove"></i><i class="icon-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="icon-calendar"></i> Events <div class="tree-actions"><i class="icon-plus"></i><i class="icon-remove"></i><i class="icon-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="icon-suitcase"></i> Portfolio <div class="tree-actions"><i class="icon-plus"></i><i class="icon-remove"></i><i class="icon-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            $('#MyTree').tree({
                dataSource: treeDataSource,
                loadingHTML: '<img src="assets/img/input-spinner.gif"/>',
            });


            $('#MyTree2').tree({
                dataSource: treeDataSource2,
                loadingHTML: '<img src="assets/img/input-spinner.gif"/>',
            });

            $('#MyTree3').tree({
                dataSource: treeDataSource3,
                loadingHTML: '<img src="assets/img/input-spinner.gif"/>',
            });

            $('#MyTree4').tree({
                selectable: false,
                dataSource: treeDataSource4,
                loadingHTML: '<img src="assets/img/input-spinner.gif"/>',
            });
        }

    };

}();