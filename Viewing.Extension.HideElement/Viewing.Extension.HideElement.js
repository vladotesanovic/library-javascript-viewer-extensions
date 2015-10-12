///////////////////////////////////////////////////////////////////////////////
// Hide selected element extension for AutoDesk viewer
// by vlado.tesanovic@gmail.com, October 2015
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Viewing.Extension");

Viewing.Extension.HideElement = function (viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _hideIcon = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2NTlDNDRGNzBFNTExRTVCN0NGQUY1NzQ5Q0I2NjE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2NTlDNDUwNzBFNTExRTVCN0NGQUY1NzQ5Q0I2NjE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY1OUM0NEQ3MEU1MTFFNUI3Q0ZBRjU3NDlDQjY2MTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY1OUM0NEU3MEU1MTFFNUI3Q0ZBRjU3NDlDQjY2MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nfRa3AAAB2klEQVR42txXsU4DMQxtuzERqT+QgQG2+4N2ggEhneAHurL1E44d6bauJ1YG6MxS/uDaHakTElKHVuIDgiP5IDJ2fFfgTsLSUyMnjh3fi532nXO9LmXQ61i6COACMOwqgBngBnDyqfEcaAkz9yXDSt+F8/NwrulGE0ABKN132QIWgAyQCM5P6Z51nBrcdOuaiQ9mHnPu0VfqwBhQACzR7wBL/F0BRsF6Tq4AD+yMkm4qBUkvly1v90rs/CeznI20Uc6k0+5BuHfCkaROAPTkWeS0Kc6PBcJZQtgS7cQAEuJ80uDzbATCGRLEQgrAL1wHC3PBeaqw/1LIVniLplwAuRQlwVoJQMramPDBhgFYMmkiAWiSRWyzYN2j1w2Ce73DsWHu/W/JYTBe0TowjbE1QLnnJ0i5LMc2L4SN5hHnpWCTEBKm0jW0ZGERKTJvTJU0NZwXWiFKmY2lrpYgu03Nk6uFSCo0G62rCR3UabzSmhFtwSvUx06cM3YiqbWT3EcIVz1AKkiSx3zU7Wq3NSog17rVDio9SPzr9RrHZ4AnHCf46BhhwTKoe8b5JRaYeVDY4sJEddeQcD8CVRy36TzsBZUcYPrDtP+pcBw4Ary09VdJexX//3/HHwIMAIcZ6rW14k8JAAAAAElFTkSuQmCC';
    var _showIcon = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNFRUM0MkE3NzBFNTExRTVBMEU1RjNCNjkwNjMxQUQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNFRUM0MkE4NzBFNTExRTVBMEU1RjNCNjkwNjMxQUQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0VFQzQyQTU3MEU1MTFFNUEwRTVGM0I2OTA2MzFBRDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0VFQzQyQTY3MEU1MTFFNUEwRTVGM0I2OTA2MzFBRDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7l4Z5VAAABgklEQVR42uxX7W3EIAxNboEyAiOwwWWEjJARrhtkg4xAN2g3SDfgboKMkG5AHcmVLMvYUFW6H42lpzuBgedPSJ9z7p4pl+7JchI4CbQSmAARkACZYQesgBkQqnc8ytCAA8yAPbfJChis/XujDwxosWfjX4A7/j4AV6LP5Q3wirpNHpgEqyIgGN6a0HoqCeClNaWNFsGdviJcFCML2y6Rr7F8Vqwdcb4Ua4/WU084jUBgh08N4UmF8DhGYi0ROBQ3orgori3Jxi0ke9Nw3CQCS4klw2aUX8lrA8sHTwl4NukUApbMytqZ6L0fYxdS1z916oS6/yt5If8fvA/ctGwlSL8MwSh5Wds8VsRSqgRpTWBJOJbK0DPFqFizCV3SVRwerUY0Cht3imWDEi5+uNmISo0m1dxswg2arbyyLqNduBMmw+JFWFdMasuSoGT9joRW4fbLFR21igD1xtb4IIk1N2jf+GES8NFxxYblcOwT5+/YYD6KDxAm/flldBL49wS+BRgAV/Tg0yTDzLIAAAAASUVORK5CYII=';

    var _self = this;
    var _hiddenElements = [];
    
    _self.load = function () {

        var mainToolbar = viewer.getToolbar(true);
        _mainViewerSubToolbar = new Autodesk.Viewing.UI.ControlGroup("lmvdbg_viewer_control_group10");

        var hideButton = new Autodesk.Viewing.UI.Button("lmvdbg_viewer_tb_button_10");
        hideButton.icon.style.backgroundImage = "url('data:image/png;base64,"+_hideIcon+"')";
        hideButton.setToolTip("Hide element");

        /**
         * Hide selected element
         */
        hideButton.onClick = function () {
            _hiddenElements = viewer.getSelection();
            viewer.hide(_hiddenElements);
        };

        var showButton = new Autodesk.Viewing.UI.Button("lmvdbg_viewer_tb_button_11");
        showButton.icon.style.backgroundImage = "url('data:image/png;base64,"+_showIcon+"')";
        showButton.setToolTip("Show all hidden elements");

        /**
         * Show hidden elements in viewer
         */
        showButton.onClick = function () {

            for(var index in _hiddenElements) {
                viewer.show(_hiddenElements[index]);
            }
            _hiddenElements = [];
            viewer.clearSelection();
        };

        _mainViewerSubToolbar.addControl(hideButton);
        _mainViewerSubToolbar.addControl(showButton);
        mainToolbar.addControl(_mainViewerSubToolbar);
        return true;
    }

    _self.unload = function () {

        console.log('Viewing.Extension.HideElement unloaded');
        return true;
    }
};

Viewing.Extension.HideElement.prototype =
    Object.create(Viewing.Extension.HideElement.prototype);

Viewing.Extension.HideElement.prototype.constructor =
    Viewing.Extension.HideElement;

Autodesk.Viewing.theExtensionManager.registerExtension(
    'Viewing.Extension.HideElement',
    Viewing.Extension.HideElement);
