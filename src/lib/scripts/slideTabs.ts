export function openTab(evt: MouseEvent, tabElementId: string): void {
		if (evt.currentTarget == null) {
			return;
		}

		let target = evt.currentTarget as HTMLElement;
		let parentNode = target.parentNode as HTMLElement;

		let tabButtonParentNodes = parentNode.querySelectorAll<HTMLElement>(':scope > .tab-btn');

		tabButtonParentNodes.forEach((el) => {
			el.classList.remove("border-b-2", "border-blue-600", "text-blue-600");
			el.classList.add("text-gray-500", "transition-colors", "hover:text-blue-600");
		});

		target.classList.remove("text-gray-500", "transition-colors", "hover:text-blue-600");
		target.classList.add("border-b-2", "border-blue-600", "text-blue-600");

		let tabElement = document.getElementById(tabElementId);

		if (tabElement == null) {
			return;
		}

		tabElement.style.display = 'block';

		let tabElementContainer = tabElement.parentNode;

		if (tabElementContainer == null) {
			return;
		}

		let nestedTabs = tabElementContainer.querySelectorAll<HTMLElement>(':scope > .tab-content');

		nestedTabs.forEach((el) => {
			if (el.id != tabElementId) {
				el.style.display = 'none';
			}
		});
	}