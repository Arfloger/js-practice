function PageScroller(selector) {
	var self = this
	self.el = document.querySelectorAll(selector)
	var delta = 0
	var p = 0
	var numElem = 100

	self.el.forEach(function (elem, i) {
		elem.style.zIndex = numElem - i
	})

	function scrollPage(event) {
		delta += event.deltaY
		self.el[p].style.top = -delta + 'px'

		if (delta >= self.el[p].offsetHeight) {
			p++
			delta = 0
		} else if (p !== 0 && delta < 0) {
			self.el[p].style.top = null
			p--
			delta = self.el[p].offsetHeight
			self.el[p].style.top = -delta + 'px'
		} else if (p === self.el.length - 1) {
			self.el[p].style.top = null
			delta = 0
		} else if (p === 0 && delta < 0) {
			self.el[p].style.top = null
			delta = 0
		}
	}

	document.addEventListener('wheel', scrollPage)

}

new PageScroller('.page')
