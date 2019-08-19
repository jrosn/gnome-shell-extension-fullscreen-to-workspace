const Meta = imports.gi.Meta

let handle

function maximize(win) {
    const newworkspace = global.workspace_manager.n_workspaces
    win.change_workspace_by_index(newworkspace, 1)
    global.workspace_manager.get_workspace_by_index(newworkspace).activate(global.get_current_time())
}

function unmaximize(win) {
    win.change_workspace_by_index(0, 1);
    global.workspace_manager.get_workspace_by_index(0).activate(global.get_current_time())
}

function enable() {
    handle = global.window_manager.connect('size-change', (_, act, change) => {
        const win = act.meta_window

        if (win.window_type !== Meta.WindowType.NORMAL)
            return

        if (global.display.get_primary_monitor() != win.get_monitor())
            return

        switch (change) {
            case Meta.SizeChange.FULLSCREEN: return maximize(win)
            case Meta.SizeChange.UNFULLSCREEN: return unmaximize(win)
        }
    })
}

function disable() {
    global.window_manager.disconnect(handle)
}
