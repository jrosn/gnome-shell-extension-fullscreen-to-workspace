const Meta = imports.gi.Meta

let handle

function maximize(act) {
    const win = act.meta_window
    
    if (global.workspace_manager.get_active_workspace().list_windows().length == 1)
        return
        
    if (global.display.get_primary_monitor() != win.get_monitor())
        return
    
    let newworkspace = global.workspace_manager.n_workspaces

    win.change_workspace_by_index(newworkspace, 1)
    global.workspace_manager.get_workspace_by_index(newworkspace).activate(global.get_current_time())
}

function unmaximize(act) {
    act.meta_window.change_workspace_by_index(0, 1);
    global.workspace_manager.get_workspace_by_index(0).activate(global.get_current_time())
}

function enable() {
    handle = global.window_manager.connect('size-change', (_, act, change) => {
        if (win.window_type !== Meta.WindowType.NORMAL)
            return

        switch (change) {
            case Meta.SizeChange.FULLSCREEN: return maximize(act)
            case Meta.SizeChange.UNFULLSCREEN: return unmaximize(act)
        }
    })
}

function disable() {
    global.window_manager.disconnect(handle)
}
