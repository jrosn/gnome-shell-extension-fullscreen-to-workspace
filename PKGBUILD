# Maintainer: Zhang Shiwei <ylxdzsw@gmail.com>

pkgname=gnome-shell-extension-fullscreen-to-workspace-git
pkgdesc="Fullscreen to new workspace."
pkgver=0
pkgrel=1
arch=(any)
url='https://github.com/ylxdzsw/gnome-shell-extension-fullscreen-to-workspace'
license=(GPL3)
depends=('gnome-shell')
makedepends=('git')
source=('git+https://github.com/ylxdzsw/gnome-shell-extension-fullscreen-to-workspace.git')
md5sums=('SKIP')

pkgver() {
    cd "$srcdir"/gnome-shell-extension-fullscreen-to-workspace
    echo r$(git rev-list --count master).$(git rev-parse --short master)
}

package() {
    mkdir -p "$pkgdir/usr/share/gnome-shell/extensions/"
    cp -r "$srcdir/gnome-shell-extension-fullscreen-to-workspace/fullscreen-to-workspace@ylxdzsw.com" "$pkgdir/usr/share/gnome-shell/extensions"
}