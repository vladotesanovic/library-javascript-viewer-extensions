///////////////////////////////////////////////////////////////////////////////
// Reset extension for AutoDesk viewer
// by vlado.tesanovic@gmail.com, October 2015
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Viewing.Extension");

Viewing.Extension.ResetViewer = function (viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _resetIcon = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wkSDAwVEM6rvAAAAb5JREFUWMPtlzsvREEYhmcoXVorEQUhEoXdIBRqlf9g4/IL/AI2S6OXzSoQ8TcUJC5hlyDYpacRYS3do/kSm8mZOZcdhcSbnOKc73vP+871m1HqH38JwBCwCpwAdX5Ql295YPA3hCeBS6LjEpjwJb4dIrbuiG01I9wCVMOaKrljwKslpQq0JjFQidLXBqdoSbv32e0VYAHoklxtcCeAl8TDAYw7xGclZwooAGXLP5Ys/NEoBsoW8gjQaa4GgzsNPDsaUAoTH7C1XMS/LJOwBziMuET7XQbyQWMuMds+sEY85FwGjgMI8zLmvnDkMlALIKSADY8G3hs1WwwPbaYprfWTUmq4mc3UeG93GfCJfa21VkppV5Jp4CNgWLqVUjcJDNwJ10TNZeA6gDCjlNpNYGBPuCauXJMwFzBpHiVWijHRSsJ5CIgtuwz0W344B7QDnxHE60CHLN8g9CXditNiwtUTFyKescTPmy1GWaMYHchTAKYklnXwR6NWxJ2o5VjyU8BiyAFmK+6Z4Nbj7neT9Eh27UH8Cki+4QGbTYgXfZ2MM8BZDOFTIP0b94NeYEUuIW8Ngm9SyleA3v8r3J/CNz4Kid9w2lYPAAAAAElFTkSuQmCC';

    var _self = this;
    
    _self.load = function () {

        var mainToolbar = viewer.getToolbar(true);
        _mainViewerSubToolbar = new Autodesk.Viewing.UI.ControlGroup("lmvdbg_viewer_control_group12");

        var resetButton = new Autodesk.Viewing.UI.Button("lmvdbg_viewer_tb_button_13");
        resetButton.icon.style.backgroundImage = "url('data:image/png;base64," + _resetIcon + "')";
        resetButton.setToolTip("Reset viewer");

        /**
         * Reset all elements in viewer
         */
        resetButton.onClick = function () {
            viewer.isolate();
        };

        _mainViewerSubToolbar.addControl(resetButton);
        mainToolbar.addControl(_mainViewerSubToolbar);
        return true;
    }

    _self.unload = function () {

        console.log('Viewing.Extension.HideElement unloaded');
        return true;
    }
};

Viewing.Extension.ResetViewer.prototype =
    Object.create(Viewing.Extension.ResetViewer.prototype);

Viewing.Extension.ResetViewer.prototype.constructor =
    Viewing.Extension.ResetViewer;

Autodesk.Viewing.theExtensionManager.registerExtension(
    'Viewing.Extension.ResetViewer',
    Viewing.Extension.ResetViewer);

