///////////////////////////////////////////////////////////////////////////////
// Take screen shoot extension for AutoDesk viewer
// by vlado.tesanovic@gmail.com, October 2015
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Viewing.Extension");

Viewing.Extension.Screenshot = function (viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _Icon = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4QzIxQzg0NzBGMTExRTU4RTYwREU5MEYwNTY0OUNGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4QzIxQzg1NzBGMTExRTU4RTYwREU5MEYwNTY0OUNGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzhDMjFDODI3MEYxMTFFNThFNjBERTkwRjA1NjQ5Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzhDMjFDODM3MEYxMTFFNThFNjBERTkwRjA1NjQ5Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5TmPznAAABVUlEQVR42uxXgY2CQBAUYwGWgB1QAlbw0gFWYKhArQC/gqcD3grEDujAK4EOzt1kzmzyd+TJ353J6yYTgUN23J1ZzkRrPXtmzGdPjlAEtAOHl6nAr2MR6LlHx/XuZ7PIBYQlodVx4kYokfdBoNbxI+XcpgXZaJn8RQqYY2XTwDogAbbh3ocImf2GsMR5j8oNoV3ACVtCblkboP5TqDnAv/rmSG7I1YSvUARaUfJvwoqQAFtR/hLt8UpgI5zSEApWsFhvIF5DovZN4EP0uXLcw0L8tNjNC4FUJBlTemf5zv/YD/T4zIUQbSEdonwSOItjl8BYpDtB2CuBTvS3hCUz4X++dhHVqUJMwgJJMtjS5fVqygttiggHeL1xrCuQnDSKp74LBky9IwSXWloUZUumRirxZwKXwBsSK4Gr8HAeaQb1UoQnlFRFSlyYkZ68/xu+PIG7AAMADgk8Me1StpIAAAAASUVORK5CYII=';

    var _self = this;
    var _hiddenElements = [];
    
    _self.load = function () {

        var mainToolbar = viewer.getToolbar(true);
        _mainViewerSubToolbar = new Autodesk.Viewing.UI.ControlGroup("lmvdbg_viewer_control_group11");

        var takeShootButton = new Autodesk.Viewing.UI.Button("lmvdbg_viewer_tb_button_12");
        takeShootButton.icon.style.backgroundImage = "url('data:image/png;base64,"+_Icon+"')";
        takeShootButton.setToolTip("Take Screen shot");

        /**
         * Take Screen shot
         */
        takeShootButton.onClick = function () {

            var shoot = viewer.getScreenShot();
            var xhr = new XMLHttpRequest();
            xhr.open( "GET", shoot, true );
            xhr.responseType = "arraybuffer";

            xhr.onload = function() {

                var arrayBufferView = new Uint8Array( this.response );
                var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
                var urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL( blob );
                var link = document.createElement('a');
                link.style.display = 'none';
                link.href = imageUrl;
                link.download = new Date().toISOString() + '.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };

            xhr.send();
        };

        _mainViewerSubToolbar.addControl(takeShootButton);
        mainToolbar.addControl(_mainViewerSubToolbar);
        return true;
    }

    _self.unload = function () {

        console.log('Viewing.Extension.Screenshot unloaded');
        return true;
    }
};

Viewing.Extension.Screenshot.prototype =
    Object.create(Viewing.Extension.Screenshot.prototype);

Viewing.Extension.Screenshot.prototype.constructor =
    Viewing.Extension.Screenshot;

Autodesk.Viewing.theExtensionManager.registerExtension(
    'Viewing.Extension.Screenshot',
    Viewing.Extension.Screenshot);

